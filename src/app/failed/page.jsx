import Link from "next/link";
import BackgroundShell from "@/components/common/BackgroundShell";

export const metadata = { title: "Payment Failed" };

export default function FailedPage() {
  return (
    <BackgroundShell bg="/1.jpg">
      <main className="min-h-screen text-white flex items-center justify-center px-6">
        <div className="max-w-lg w-full rounded-2xl bg-black/50 ring-1 ring-white/10 p-8 text-center backdrop-blur-sm">
          <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-red-500/15 flex items-center justify-center">
            <svg
              className="h-7 w-7 text-red-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold">Payment Failed</h1>
          <p className="mt-2 text-neutral-200">
            Something went wrong. Please try again.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link href="/checkout" className="btn">
              Try Again
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Support
            </Link>
          </div>
        </div>
      </main>
    </BackgroundShell>
  );
}
