import Navbar from "../../components/common/Navbar";
import Header from "../../components/home/Header";
import Hero from "../../components/common/Hero";
import FooterStrip from "@/components/common/FooterStrip";
import FindSpecialtiesSection from "@/components/home/FindSpecialitiesSection";
import ResourcePage from "@/components/resourcepage/ResourcePage";
import TrainerList from "@/components/trainers/TrainerList";
export const metadata = { title: "Membership | Depth Training" };

export default function ResourcePages() {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <FindSpecialtiesSection />
      <ResourcePage />
      <FooterStrip /> {/* ✅ add footer */}
    </main>
  );
}
