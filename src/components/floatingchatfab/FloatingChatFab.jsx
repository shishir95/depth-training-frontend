"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function FloatingChatFab() {
  const pathname = usePathname();

  // ✅ Use a single, consistent base URL
  // Make sure you have this in .env.local:
  // NEXT_PUBLIC_API_BASE=http://localhost:3001
  const API_BASE =
    (process.env.NEXT_PUBLIC_API_BASE &&
      process.env.NEXT_PUBLIC_API_BASE.replace(/\/$/, "")) ||
    "http://localhost:3001";

  const createMessage = (role, text = "", extra = {}) => ({
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`,
    role,
    text,
    ts: Date.now(),
    ...extra,
  });

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => [
    createMessage(
      "assistant",
      "Hey! I’m your Depth Coach. Want help finding the right physiotherapist or training plan?"
    ),
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHint, setShowHint] = useState(true);
  const [triageStep, setTriageStep] = useState(0);
  const [triageData, setTriageData] = useState({});
  const chatEndRef = useRef(null);

  // auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // auto-hide hint pill
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const callRecommend = async (payload) => {
    setIsLoading(true);
    setError(null);

    try {
      const url = `${API_BASE}/ai/recommend`;

      console.log("[Depth Assistant][RECOMMEND] POST", url, payload);

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const raw = await res.text();
      if (!res.ok) {
        console.error(
          "[Depth Assistant][RECOMMEND] Backend error:",
          res.status,
          res.statusText,
          raw
        );
        throw new Error("Request failed");
      }

      let data = null;
      try {
        data = raw ? JSON.parse(raw) : null;
      } catch (e) {
        console.error("[Depth Assistant][RECOMMEND] JSON parse error:", e, raw);
        throw new Error("Invalid JSON from server");
      }

      const replyText = data?.message?.trim();
      if (!replyText) throw new Error("Empty reply from recommender");

      setMessages((prev) => [
        ...prev,
        createMessage("assistant", replyText, { source: "recommender" }),
      ]);
    } catch (err) {
      console.error("Depth Assistant recommender error:", err);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "I couldn’t run the recommendation system right now. Please try again.",
          { source: "recommender-error" }
        ),
      ]);
      setError("Could not reach Recommendation API.");
    } finally {
      setIsLoading(false);
      setTriageStep(0);
      setTriageData({});
    }
  };

  const handleTriageStep = async (rawAnswer) => {
    const text = rawAnswer.trim();
    const lower = text.toLowerCase();

    // Step 1: body area
    if (triageStep === 1) {
      setTriageData((prev) => ({ ...prev, bodyArea: text }));
      setTriageStep(2);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "Can you describe the type of pain? For example: sharp, dull, aching, only with movement, constant, and when it started."
        ),
      ]);
      return;
    }

    // Step 2: pain type
    if (triageStep === 2) {
      setTriageData((prev) => ({ ...prev, painType: text }));
      setTriageStep(3);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "How did this start? For example: after a run, during a workout, after a fall, or it came on gradually."
        ),
      ]);
      return;
    }

    // Step 3: injury mechanism
    if (triageStep === 3) {
      setTriageData((prev) => ({ ...prev, injuryMechanism: text }));
      setTriageStep(4);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "Is there any noticeable swelling in the area? Please answer yes or no."
        ),
      ]);
      return;
    }

    // Step 4: swelling yes/no
    if (triageStep === 4) {
      const swelling =
        lower === "yes" ||
        lower === "y" ||
        lower === "true" ||
        lower.includes("swollen");
      setTriageData((prev) => ({ ...prev, swelling }));
      setTriageStep(5);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "What activities or sports are you currently doing (or want to get back to)?"
        ),
      ]);
      return;
    }

    // Step 5: sport / activity
    if (triageStep === 5) {
      setTriageData((prev) => ({ ...prev, sport: text }));
      setTriageStep(6);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "What is your main goal? For example: return to running pain-free, lift without pain, manage daily activities, etc."
        ),
      ]);
      return;
    }

    // Step 6: goal
    if (triageStep === 6) {
      setTriageData((prev) => ({ ...prev, goal: text }));
      setTriageStep(7);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "How soon would you like to be seen? You can reply with: now, soon, or flexible."
        ),
      ]);
      return;
    }

    // Step 7: urgency, then call backend
    if (triageStep === 7) {
      let urgency = "flexible";
      if (lower.includes("now") || lower.includes("asap")) urgency = "now";
      else if (lower.includes("soon")) urgency = "soon";

      const finalPayload = {
        ...triageData,
        urgency,
      };

      console.log("[Depth Assistant][TRIAGE COMPLETE] payload:", finalPayload);
      setTriageStep(0);
      await callRecommend(finalPayload);
      return;
    }
  };

  // Single sendMessage implementation to avoid duplicate definitions
  const sendMessage = async (rawText) => {
    const text = rawText.trim();
    if (!text || isLoading) return;

    const userMessage = createMessage("user", text);

    // If we're already in a triage flow, record the answer and advance
    if (triageStep > 0) {
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      await handleTriageStep(text);
      return;
    }

    // Dev/test shortcut: trigger recommender with a demo payload
    if (text.toLowerCase() === "recommend demo") {
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      await callRecommend({
        age: 24,
        bodyArea: "knee",
        painType: "sharp pain while running; started 2 weeks ago",
        injuryMechanism: "after 10k run, no fall",
        swelling: true,
        sport: "recreational running",
        goal: "return to running pain-free",
        urgency: "soon",
      });
      return;
    }

    // If user asks for help choosing services or mentions pain/injury, start guided triage
    const lower = text.toLowerCase();
    if (
      lower.includes("physio") ||
      lower.includes("physiotherapy") ||
      lower.includes("injury") ||
      lower.includes("pain") ||
      lower.includes("service") ||
      lower.includes("services") ||
      lower.includes("help") ||
      lower.includes("recommend") ||
      lower.includes("what should") ||
      lower.includes("which service") ||
      lower.includes("treatment") ||
      lower.includes("strength") ||
      lower.includes("conditioning") ||
      lower.includes("mobility") ||
      lower.includes("performance") ||
      lower.includes("fitness") ||
      lower.includes("training")
    ) {
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setTriageStep(1);
      setTriageData({});
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "Great! To help you find the right support, could you share a bit more about your goal or concern? For example:\n- Are you recovering from an injury or managing a chronic condition?\n- Do you want to improve strength, mobility, or performance?\n- Are you looking for general fitness or post-rehab training?\n\nLet me know, and I’ll guide you to the best option!"
        ),
      ]);
      return;
    }

    // Otherwise, fall back to the normal /ai/chat LLM assistant
    let conversationSnapshot = [];
    setMessages((prev) => {
      conversationSnapshot = [...prev, userMessage];
      return conversationSnapshot;
    });
    setInput("");
    setError(null);
    setIsLoading(true);

    const summaryLines = conversationSnapshot.map((m) => {
      const prefix = m.role === "user" ? "User" : "Assistant";
      return `${prefix}: ${m.text}`;
    });

    const payload = {
      message: text,
      page:
        pathname ||
        (typeof window !== "undefined"
          ? window.location?.pathname
          : undefined),
      context: summaryLines.join(" | ").slice(0, 200),
    };

    try {
      const url = `${API_BASE}/ai/chat`;
      console.log("[Depth Assistant] POST", url, payload);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const raw = await res.text();
      if (!res.ok) {
        console.error(
          "[Depth Assistant] Backend error:",
          res.status,
          res.statusText,
          raw
        );
        throw new Error("Request failed");
      }

      let data = null;
      try {
        data = raw ? JSON.parse(raw) : null;
      } catch (e) {
        console.error("[Depth Assistant] JSON parse error:", e, raw);
        throw new Error("Invalid JSON from server");
      }

      const replyText = data?.reply?.trim();
      if (!replyText) throw new Error("Empty reply");
      setMessages((prev) => [...prev, createMessage("assistant", replyText)]);
    } catch (err) {
      console.error("Depth Assistant error:", err);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "I’m having trouble responding right now, but you can try again in a moment."
        ),
      ]);
      setError("Could not reach Depth Assistant. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 sm:right-6">
        {showHint && !open && (
          <div className="px-3 py-1.5 text-[12px] rounded-full bg-white border border-rose-500 text-zinc-900 shadow">
            Hi! I am your AI assistant
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="h-14 w-14 rounded-full bg-[var(--bg-primary)] text-white shadow-lg grid place-items-center hover:bg-rose-600 transition"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M3 12a7 7 0 0 1 7-7h4a7 7 0 1 1 0 14h-1.382L9 21v-2.5A6.5 6.5 0 0 1 3 12Z" />
          </svg>
        </button>
      </div>

      {/* Chat Panel */}
      {open && (
        <div className="fixed inset-x-3 bottom-4 h-[80vh] sm:inset-auto sm:bottom-24 sm:right-4 sm:w-[360px] sm:h-[70vh] flex flex-col min-h-0 bg-white border-2 border-[var(--bg-primary)] rounded-2xl shadow-2xl overflow-hidden z-50">
          {/* Header */}
          <div className="bg-[var(--bg-primary)] text-white flex items-center px-4 py-2">
            <div className="h-8 w-8 rounded-full bg-white/15 grid place-items-center mr-2">
              <img src="/assets/ai.png" className="h-5 w-5" alt="AI" />
            </div>
            <h2 className="text-sm font-semibold">Depth Assistant</h2>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto hover:bg-white/10 rounded p-1"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811Z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-3 py-3 space-y-3 text-sm bg-white/80"
            style={{ WebkitOverflowScrolling: "touch" }}
            onWheelCapture={(e) => e.stopPropagation()}
            onTouchMoveCapture={(e) => e.stopPropagation()}
          >
            {messages.map((m, i) =>
              m.type === "booking" ? (
                <div
                  key={m.id || i}
                  className="mx-auto w-full max-w-[260px] rounded-2xl border border-[var(--bg-primary)] text-center overflow-hidden shadow"
                >
                  <div className="pt-4 text-zinc-500">
                    <img
                      src="/assets/image.png"
                      alt="Alex"
                      className="mx-auto h-20 w-20 rounded-full object-cover"
                    />
                    <div className="mt-2 text-base font-semibold">Alex</div>
                    <div className="text-xs ">Physiotherapist</div>
                  </div>
                  <div className="p-3">
                    <a
                      href="#"
                      className="block w-full h-9 bg-[var(--bg-primary)] text-white rounded-lg text-sm leading-9 hover:bg-rose-600"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ) : (
                <div
                  key={m.id || i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  } items-start gap-2`}
                >
                  {m.role === "assistant" && (
                    <div className="mt-1 h-7 w-7 rounded-full bg-[var(--bg-primary)] text-white grid place-items-center">
                      <img src="/assets/ai.png" className="h-5 w-5" alt="AI" />
                    </div>
                  )}
                  <div
                    className={`px-3 py-2 rounded-2xl max-w-[80%] ${
                      m.role === "user"
                        ? "bg-white border border-zinc-300 text-black"
                        : "bg-[var(--bg-primary)] text-white"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.role === "user" && (
                    <div className="mt-1 h-7 w-7 rounded-full bg-zinc-900 text-white grid place-items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 8a7 7 0 0 1 14 0H5Z" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            )}
            {isLoading && (
              <div className="flex justify-start items-start gap-2">
                <div className="mt-1 h-7 w-7 rounded-full bg-[var(--bg-primary)] text-white grid place-items-center">
                  <img src="/assets/ai.png" className="h-5 w-5" alt="AI" />
                </div>
                <div className="px-3 py-2 rounded-2xl bg-[var(--bg-primary)] text-white max-w-[80%]">
                  <span className="flex items-center gap-1">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse"
                        style={{ animationDelay: `${dot * 120}ms` }}
                      ></span>
                    ))}
                  </span>
                  <span className="ml-2 text-xs text-white/80">
                    AI is typing…
                  </span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-zinc-200 bg-white/80"
          >
            <div className="flex gap-2 items-end">
              <textarea
                rows="1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 resize-none rounded-xl border border-zinc-300 px-3 py-2 focus:ring-2 focus:ring-rose-400 outline-none text-sm text-black"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`h-10 px-3.5 rounded-xl text-white transition ${
                  !input.trim() || isLoading
                    ? "bg-zinc-300 cursor-not-allowed"
                    : "bg-[var(--bg-primary)] hover:bg-rose-600"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="m2.01 3.273 1.3 5.63a2 2 0 0 0 1.39 1.49l6.6 1.806a.5.5 0 0 1 0 .962l-6.6 1.806a2 2 0 0 0-1.39 1.49l-1.3 5.63a.5.5 0 0 0 .72.551l19.11-9.555a.75.75 0 0 0 0-1.342L2.73 2.722a.5.5 0 0 0-.72.551Z" />
                </svg>
              </button>
            </div>
            {error && (
              <p className="mt-2 text-[12px] text-rose-500">{error}</p>
            )}
          </form>
        </div>
      )}
    </>
  );
}
