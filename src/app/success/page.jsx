import Link from "next/link";
import BackgroundShell from "@/components/common/BackgroundShell";

export const metadata = { title: "Payment Successful" };

export default function SuccessPage() {
  return (
    <BackgroundShell bg="/1.jpg">
      <main className="min-h-screen text-white flex items-center justify-center px-6">
        <div className="max-w-lg w-full rounded-2xl bg-black/50 ring-1 ring-white/10 p-8 text-center backdrop-blur-sm">
          <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-emerald-500/15 flex items-center justify-center">
            <svg
              className="h-7 w-7 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M20 6L9 17l-5-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold">Payment Successful</h1>
          <p className="mt-2 text-neutral-200">
            Thanks! Your order is confirmed.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link href="/resources" className="btn">
              Explore Resources
            </Link>
            <Link href="/service" className="btn-ghost">
              Back to Services
            </Link>
          </div>
        </div>
      </main>
    </BackgroundShell>
  );
}
