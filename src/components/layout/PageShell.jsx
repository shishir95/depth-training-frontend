"use client";

import AnimatedBackdrop from "@/components/home/AnimatedBackdrop";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function PageShell({
  children,
  maxWidth = "max-w-7xl",
  padY = "py-12",
  className = "",
}) {
  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#020109] text-white">
      <AnimatedBackdrop />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,99,99,0.28),_transparent_55%),radial-gradient(circle_at_20%_60%,_rgba(14,116,144,0.18),_transparent_60%),#020109]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
        <div className="h-1/2 w-full bg-[radial-gradient(circle,_rgba(255,138,128,0.4),_transparent_70%)]" />
      </div>

      <div className="relative z-10 flex w-full justify-center">
        <div
          className={cx(
            "mx-auto w-full px-4 sm:px-6 lg:px-8",
            maxWidth,
            padY,
            "space-y-12",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
