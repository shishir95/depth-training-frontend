import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import ResourcePage from "@/components/resourcepage/ResourcePage";
import FeaturedTraining from "@/components/membership/FeaturedTraining";

export const metadata = { title: "Resources | Depth Training" };

export default function ResourcePages() {
  return (
    <main className="bg-black text-white min-h-screen w-full">
      <Header />
      <ResourcePage />
      <FeaturedTraining />
      <FooterStrip /> {/* ✅ add footer */}
    </main>
  );
}
