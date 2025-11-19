import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import FloatingChatFab from "@/components/floatingchatfab/FloatingChatFab";
import AnimationScroll from "@/components/common/AnimationScroll";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <AnimationScroll>
          <div className="relative isolate min-h-screen w-full overflow-hidden bg-[#020109] text-white">
            <div className="relative z-10">{children}</div>
          </div>
        </AnimationScroll>
        <FloatingChatFab />
      </body>
    </html>
  );
}
