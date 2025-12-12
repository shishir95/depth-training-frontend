import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";

export const metadata = {
  title: "Privacy Policy | Depth Training",
  description:
    "Learn how Depth Training collects, uses, and protects your information across our website and services.",
};

const LAST_UPDATED = "2025-12-07";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <Header />

      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <header className="mb-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b0b0b] via-black to-[#111015] p-8 sm:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
            Policy
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-zinc-300">
            Last updated:{" "}
            <time dateTime={LAST_UPDATED}>{formatDate(LAST_UPDATED)}</time>
          </p>
        </header>

        <article className="prose prose-invert prose-sm max-w-none text-zinc-200">
          <p>
            This Privacy Policy explains how <strong>Depth Training</strong>{" "}
            (“we”, “us”, or “our”) collects, uses, and protects your personal
            information when you visit our website, make a booking, contact us,
            or otherwise interact with our services.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              <strong>Contact details</strong> — name, email, phone number.
            </li>
            <li>
              <strong>Booking details</strong> — selected services, times,
              preferences.
            </li>
            <li>
              <strong>Payment info</strong> — handled securely by payment
              partners (we do not store full card numbers).
            </li>
            <li>
              <strong>Usage data</strong> — device info, pages viewed,
              approximate location, and analytics/cookies.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide and manage training and therapy services.</li>
            <li>Process payments and send confirmations/receipts.</li>
            <li>Respond to messages and provide support.</li>
            <li>Improve site performance, safety, and user experience.</li>
            <li>
              Send service updates and optional marketing (you can unsubscribe
              anytime).
            </li>
          </ul>

          <h2>3. Cookies &amp; Analytics</h2>
          <p>
            We use cookies and similar technologies to keep you signed in,
            remember preferences, and measure site performance. You can control
            cookies in your browser settings.
          </p>

          <h2>4. Payments</h2>
          <p>
            Payments may be processed by a third-party provider (e.g., Stripe).
            These providers store and process payment data under their own
            privacy policies. We only receive the details necessary to confirm
            payment status.
          </p>

          <h2>5. Sharing &amp; Third Parties</h2>
          <p>
            We don’t sell your data. We may share information with trusted
            vendors who help operate our website and services (hosting,
            analytics, payment processing). These partners are contractually
            required to protect your data and use it only for the agreed
            purpose. We may also disclose information if required by law or to
            protect rights, safety, or security.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal information only as long as needed for the
            purposes described here, to meet legal/financial obligations, or to
            resolve disputes. When no longer required, we delete or anonymize
            it.
          </p>

          <h2>7. Your Choices &amp; Rights</h2>
          <ul>
            <li>Access, update, or correct your information.</li>
            <li>Request deletion where applicable.</li>
            <li>Opt out of marketing emails at any time.</li>
            <li>Control cookies through your browser settings.</li>
          </ul>

          <h2>8. Children’s Privacy</h2>
          <p>
            Our website isn’t intended for children under 13. If you believe a
            child has provided us with personal data, please contact us so we
            can remove it.
          </p>

          <h2>9. Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards
            to protect your information. However, no method of transmission or
            storage is completely secure.
          </p>

          <h2>10. International Visitors</h2>
          <p>
            Our services operate in Canada. If you access the site from outside
            Canada, your information may be transferred, stored, and processed
            in Canada or other locations where our providers operate.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. We’ll post the new
            effective date at the top of this page. Continued use of our website
            after changes means you accept the updated policy.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions or requests regarding this policy, contact:
          </p>
          <ul>
            <li>
              Email: <em>info@depthtraining.ca</em> (example)
            </li>
            <li>
              Phone: <em>(555) 555-5555</em> (example)
            </li>
            <li>
              Address: <em>Waterloo, ON, Canada</em> (update to your address)
            </li>
          </ul>
        </article>
      </section>

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
