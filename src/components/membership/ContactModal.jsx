"use client";
import { useEffect, useRef, useState } from "react";

export default function ContactModal({ open, onClose, planName, plan }) {
  const firstInputRef = useRef(null);

  // Simple form state (replace with your submit/endpoint later)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    contactEmail: false,
    contactPhone: false,
    contactText: false,
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (open && firstInputRef.current) {
      firstInputRef.current.focus();
    }
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    //  Ensure API base URL is configured
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      setSubmitError('Missing API base URL. Set NEXT_PUBLIC_API_BASE_URL in .env.local and restart Next.js.');
      return;
    }

    //  Require at least one contact method
    if (!form.contactEmail && !form.contactPhone && !form.contactText) {
      setSubmitError('Please select at least one preferred contact method.');
      return;
    }

    console.log('Submitting checkout for plan:', plan);

    //  Plan must be fully provided
    if (!plan?.priceId || !plan?.intervalMonths || !plan?.planLabel) {
      setSubmitError('Plan configuration missing. Please try again.');
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch(`${baseUrl}/billing/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          priceId: plan.priceId,
          planLabel: plan.planLabel,
          intervalMonths: plan.intervalMonths,
        }),
      });

      if (!res.ok) throw new Error(`Checkout failed (${res.status})`);
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
        return;
      }
      setSubmitError('Unexpected response from server.');
    } catch (err) {
      console.error('checkout error', err);
      setSubmitError('Sorry, unable to start checkout. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={submitting ? undefined : onClose}
        aria-hidden="true"
      />
      {/* Card */}
      <div className="relative z-[101] w-[min(880px,92vw)] rounded-xl bg-[#111] p-6 md:p-8 shadow-2xl ring-1 ring-white/10">
        {/* Close (X) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/80 hover:text-white transition"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Title (optional: include selected plan) */}
        {planName ? (
          <p className="mb-4 text-sm text-white/70">
            Selected plan: <span className="text-white font-medium">{planName}</span>
          </p>
        ) : null}

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5 text-white">
          {/* Full name */}
          <div>
            <label className="block mb-2 font-semibold">Full name*</label>
            <input
              ref={firstInputRef}
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full rounded-md bg-neutral-500/60 text-white placeholder-white/70 px-4 py-3 outline-none ring-0 focus:bg-neutral-500/70"
              placeholder="Your name"
            />
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-semibold">Email*</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full rounded-md bg-neutral-500/60 text-white placeholder-white/70 px-4 py-3 outline-none focus:bg-neutral-500/70"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Phone*</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full rounded-md bg-neutral-500/60 text-white placeholder-white/70 px-4 py-3 outline-none focus:bg-neutral-500/70"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Preferred contact */}
          <div>
            <p className="mb-2 font-semibold">
              How would you prefer to be connected?*
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.contactEmail}
                  onChange={(e) => update("contactEmail", e.target.checked)}
                  className="accent-[#E43F3F]"
                />
                <span>Email</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.contactPhone}
                  onChange={(e) => update("contactPhone", e.target.checked)}
                  className="accent-[#E43F3F]"
                />
                <span>Phone</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.contactText}
                  onChange={(e) => update("contactText", e.target.checked)}
                  className="accent-[#E43F3F]"
                />
                <span>Text Message</span>
              </label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold">Tell us more</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full rounded-md bg-neutral-500/60 text-white placeholder-white/70 px-4 py-3 outline-none focus:bg-neutral-500/70"
              placeholder="Any details you'd like to share"
            />
          </div>

          {submitError ? (
            <p className="text-red-400 text-sm">{submitError}</p>
          ) : null}

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className={`mx-auto block rounded-md px-6 py-2.5 font-semibold transition ${submitting ? 'bg-[#E43F3F]/60 cursor-not-allowed' : 'bg-[#E43F3F] hover:opacity-90'}`}
            >
              {submitting ? 'Starting checkout…' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
