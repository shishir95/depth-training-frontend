// src/app/resourcepage/page.jsx
import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import ResourcePage from "@/components/resourcepage/ResourcePage";
import FeaturedTraining from "@/components/membership/FeaturedTraining";
import NewsletterSection from "@/components/resourcepage/NewsletterSection";

export const metadata = { title: "Resources | Depth Training" };

export default function ResourcePages() {
  return (
    <main className="relative min-h-screen w-full bg-transparent text-white">
      <Header />
      <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-16 ">
        <ResourcePage />
        <FeaturedTraining />
      </div>
      <NewsletterSection />
      <FooterStrip />
    </main>
  );
}
