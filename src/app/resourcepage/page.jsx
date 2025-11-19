// src/app/resourcepage/page.jsx
import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import ResourcePage from "@/components/resourcepage/ResourcePage";
import FeaturedTraining from "@/components/membership/FeaturedTraining";

export const metadata = { title: "Resources | Depth Training" };

export default function ResourcePages() {
  return (
    <main className="min-h-screen w-full bg-[#020109] text-white">
      {/* full-width header */}
      <Header />

      {/* centered content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-16">
        <ResourcePage />
        <FeaturedTraining />
      </div>

      {/* full-width footer */}
      <FooterStrip />
    </main>
  );
}