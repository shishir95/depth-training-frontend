import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import FloatingChatFab from "@/components/floatingchatfab/FloatingChatFab";
import AnimationScroll from "@/components/common/AnimationScroll";
import AnimatedBackdrop from "@/components/home/AnimatedBackdrop";
import "aos/dist/aos.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Depth Training",
  description: "Choose your membership plan and start training today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white `}
      >
        <AnimationScroll>
          <div className="relative isolate min-h-screen w-full overflow-hidden bg-[#020109] text-white">
            <AnimatedBackdrop />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,99,99,0.28),_transparent_55%),radial-gradient(circle_at_20%_60%,_rgba(14,116,144,0.18),_transparent_60%),#020109]"
            />
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
              <div className="h-1/2 w-full bg-[radial-gradient(circle,_rgba(255,138,128,0.4),_transparent_70%)]" />
            </div>

            <div className="relative z-10 min-h-screen w-full bg-[#020109]">
              {children}
            </div>
          </div>
        </AnimationScroll>
        <FloatingChatFab />
      </body>
    </html>
  );
}
