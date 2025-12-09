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

  const sendMessage = async (rawText) => {
    const text = rawText.trim();
    if (!text || isLoading) return;

    const userMessage = createMessage("user", text);
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
      // backend expects a SHORT STRING, not an array
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

      // Read raw text so we can log backend errors
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
        <div className="fixed inset-x-3 bottom-4 h-[80vh] sm:inset-auto sm:bottom-24 sm:right-4 sm:w-[360px] sm:h-[70vh] flex flex-col bg-white border-2 border-[var(--bg-primary)] rounded-2xl shadow-2xl overflow-hidden z-50">
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
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 text-sm bg-white/80">
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