"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus("loading");

      // TODO: replace this with real API call (Mailchimp / custom route)
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    } finally {
      // optional: reset back to idle after a bit
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-neutral-800 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl">
          <div className="relative flex flex-col gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:gap-14 lg:px-14">
            {/* Left: copy */}
            <div className="lg:w-1/2 space-y-4">
              <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-[var(--depth-muted,#9ca3af)]">
                Newsletter
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                Stay ahead of the game with{" "}
                <span className="text-[var(--bg-primary,#ef4444)]">
                  Depth Insights
                </span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--depth-muted,#9ca3af)]">
                Get high-performance training tips, facility updates, and early
                access to programs delivered straight to your inbox. No spam —
                just actionable content from our coaching and rehab team.
              </p>

              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-[var(--depth-muted,#9ca3af)]">
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--bg-primary,#ef4444)]" />
                  <span>Weekly performance and recovery tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--bg-primary,#ef4444)]" />
                  <span>Early access to camps, clinics, and events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--bg-primary,#ef4444)]" />
                  <span>Member-only announcements and offers</span>
                </li>
              </ul>
            </div>

            {/* Right: form */}
            <div className="lg:w-1/2">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl bg-black/30 p-5 sm:p-6 border border-white/10"
              >
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-[var(--depth-muted,#9ca3af)]">
                  Join the list
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-white/10 bg.black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[var(--bg-primary,#ef4444)] focus:ring-1 focus:ring-[var(--bg-primary,#ef4444)]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center rounded-xl bg-[var(--bg-primary,#ef4444)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(239,68,68,0.45)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading"
                      ? "Joining..."
                      : "Sign up for updates"}
                  </button>
                </div>

                <p className="text-[11px] leading-relaxed text-[var(--depth-muted,#9ca3af)]">
                  By subscribing, you agree to receive emails from Depth
                  Training. You can unsubscribe at any time with a single click.
                </p>

                {status === "success" && (
                  <p className="text-xs font-medium text-emerald-400">
                    You’re in! Check your inbox to confirm your subscription.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs font-medium text-rose-400">
                    Something went wrong. Please try again in a moment.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
