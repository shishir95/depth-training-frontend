"use client";
import React, { useState, useEffect, useRef } from "react";

export default function FloatingChatFab() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey! I’m your Depth Coach. Want help finding the right physiotherapist or training plan?",
    },
  ]);
  const [showHint, setShowHint] = useState(true);
  const chatEndRef = useRef(null);

  // auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // auto-hide hint pill
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    // Demo scripted responses
    setTimeout(() => {
      if (
        text.toLowerCase().includes("injured") ||
        text.toLowerCase().includes("help")
      ) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            text: "Can you tell me where you feel pain or discomfort?",
          },
        ]);
      } else if (text.toLowerCase().includes("back")) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            text: "Based on your input I recommend seeing Alex – Sports Physiotherapist. Want to book a session?",
          },
          { role: "assistant", kind: "recommendation" },
        ]);
      } else if (text.toLowerCase().includes("yes")) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            text: "Great! You can click Book Now below to schedule.",
          },
        ]);
      } else {
        setMessages((m) => [
          ...m,
          { role: "assistant", text: "Thanks! Let’s continue your chat." },
        ]);
      }
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
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
        <div className="fixed bottom-24 right-4 w-[360px] h-[70vh] flex flex-col bg-white border-2 border-[var(--bg-primary)] rounded-xl shadow-2xl overflow-hidden z-50">
          {/* Header */}
          <div className="bg-[var(--bg-primary)] text-white flex items-center px-4 py-2">
            <div className="h-8 w-8 rounded-full bg-white/15 grid place-items-center mr-2">
              <img
                src="/assets/ai.png"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              ></img>
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
              m.kind === "recommendation" ? (
                <div
                  key={i}
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
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  } items-start gap-2`}
                >
                  {m.role === "assistant" && (
                    <div className="mt-1 h-7 w-7 rounded-full bg-[var(--bg-primary)] text-white grid place-items-center">
                      <img
                        src="/assets/ai.png"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="currentColor"
                      ></img>
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
                className="h-10 px-3.5 rounded-xl bg-[var(--bg-primary)] text-white hover:bg-rose-600"
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
          </form>
        </div>
      )}
    </>
  );
}
