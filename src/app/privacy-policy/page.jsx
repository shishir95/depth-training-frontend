// src/app/privacy-policy/page.jsx
import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import BackgroundShell from "@/components/common/BackgroundShell";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Depth Training",
  description:
    "How Depth Training collects, uses, and protects your information across our website and services.",
};

// ⬅️ VERY IMPORTANT: copy the exact image path used on About page
const BG_PATH = "/hero-resources.jpg";
const LAST_UPDATED = "2025-12-07";

export default function PrivacyPolicyPage() {
  return (
    // remove bg-black so the background can show through
    <main className="min-h-screen w-full text-white">
      <Header />

      {/* Background wrapper used elsewhere (keeps global glow/filters) */}
      <BackgroundShell>
        {/* Force a real background image behind content (even if BackgroundShell ignores props) */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <Image
              src={BG_PATH}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-[0.28]" // match About’s subtlety
            />
            {/* soft radial glows, same vibe as About */}
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_110%,rgba(255,255,255,0.05),transparent_60%)]" />
          </div>

          {/* CONTENT */}
          <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            {/* header card */}
            <header className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#05030f] via-black to-[#0a0711] shadow-[0_0_60px_-20px_rgba(255,255,255,0.06)] p-6 sm:p-8 md:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                Policy
              </p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                Privacy Policy
              </h1>
              <p className="mt-2 text-sm text-zinc-300">
                Last updated:{" "}
                <time dateTime={LAST_UPDATED}>{formatDate(LAST_UPDATED)}</time>
              </p>
            </header>

            {/* body card (same rounded/blurred look as About’s content cards) */}
            <article className="mt-8 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-sm p-6 sm:p-8 md:p-10">
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-zinc-200">
                <p>
                  This Privacy Policy explains how{" "}
                  <strong>Depth Training</strong> (“we”, “us”, or “our”)
                  collects, uses, and protects your personal information when
                  you browse our website, make a booking, contact us, or use our
                  services.
                </p>

                <h2>1) Information We Collect</h2>
                <ul>
                  <li>
                    <strong>Contact details</strong> (e.g., name, email, phone).
                  </li>
                  <li>
                    <strong>Booking information</strong> (service selections,
                    dates/times, preferences).
                  </li>
                  <li>
                    <strong>Payment information</strong> processed by trusted
                    payment providers (we don’t store full card numbers).
                  </li>
                  <li>
                    <strong>Usage &amp; device data</strong> (pages viewed,
                    approximate location, browser/device, cookies/analytics
                    events).
                  </li>
                </ul>

                <h2>2) How We Use Information</h2>
                <ul>
                  <li>
                    Provide and manage training/therapy services and bookings.
                  </li>
                  <li>Process payments and send confirmations/receipts.</li>
                  <li>Respond to inquiries and support requests.</li>
                  <li>
                    Improve site performance, security, and user experience.
                  </li>
                  <li>
                    Send service updates and optional marketing (you can
                    unsubscribe anytime).
                  </li>
                </ul>

                <h2>3) Cookies &amp; Analytics</h2>
                <p>
                  We use cookies and similar technologies to keep you signed in,
                  remember preferences, and measure website performance (e.g.,
                  traffic and page views). You can control cookies in your
                  browser settings—blocking some cookies may affect
                  functionality.
                </p>

                <h2>4) Payments</h2>
                <p>
                  Payments are handled by third-party processors (e.g., Stripe
                  or similar). These providers store and process your payment
                  data securely under their own privacy policies. We only
                  receive limited information needed to confirm your payment
                  status.
                </p>

                <h2>5) Sharing &amp; Third Parties</h2>
                <p>
                  We do not sell your personal data. We may share information
                  with trusted vendors who help operate our website and services
                  (secure hosting, analytics, payment processing, communication
                  tools). These partners are obligated to protect your data and
                  use it only for the agreed purpose. We may also disclose
                  information if required by law or to protect rights, safety,
                  or security.
                </p>

                <h2>6) Data Retention</h2>
                <p>
                  We retain personal information only as long as needed for the
                  purposes described in this policy, to meet legal/financial
                  obligations, or to resolve disputes. When no longer required,
                  we delete or anonymize the data.
                </p>

                <h2>7) Your Choices &amp; Rights</h2>
                <ul>
                  <li>Access, update, or correct your information.</li>
                  <li>Request deletion where applicable.</li>
                  <li>Opt out of marketing emails at any time.</li>
                  <li>Control cookies through your browser settings.</li>
                </ul>

                <h2>8) Children’s Privacy</h2>
                <p>
                  Our website is not intended for children under 13. We do not
                  knowingly collect personal information from children under 13.
                  If you believe a child has provided us data, please contact us
                  and we will remove it.
                </p>

                <h2>9) Security</h2>
                <p>
                  We use reasonable administrative, technical, and physical
                  safeguards to protect your information. However, no method of
                  transmission or storage is completely secure.
                </p>

                <h2>10) International Visitors</h2>
                <p>
                  Our services operate in Canada. If you access the site from
                  outside Canada, your information may be transferred, stored,
                  and processed in Canada or other locations where our providers
                  operate.
                </p>

                <h2>11) Changes to This Policy</h2>
                <p>
                  We may update this policy periodically. We will post the new
                  effective date at the top of this page. Continued use of the
                  site after changes means you accept the updated policy.
                </p>

                <h2>12) Contact Us</h2>
                <p>Questions or requests about this Privacy Policy:</p>
                <ul>
                  <li>
                    Email: <em>info@depthtraining.ca</em>
                  </li>
                  <li>
                    Phone: <em>(226) 748-9494</em>
                  </li>
                  <li>
                    Address: <em>408 Albert St, Waterloo, ON N2L 3V3</em>
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </div>
      </BackgroundShell>

      <FooterStrip />
    </main>
  );
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
