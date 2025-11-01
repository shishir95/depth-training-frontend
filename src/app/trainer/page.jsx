import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import FooterStrip from "@/components/common/FooterStrip";
import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import TrainerList from "@/components/trainers/TrainerList";
export const metadata = { title: "Membership | Depth Training" };
import Header from "@/components/common/Header";

export default function MembershipPage() {
  const heroContents = {
    title: "Meet Our Trainers and Specialties",
    subTitle:
      "Certified Experts in Physiotherapy, Rehabilitation and Fitness Performance",
    button: false,
    buttonLabel: "",
  };
  return (
    <main className="bg-black text-white min-h-screen w-full">
      <Header />
      <Hero {...heroContents} />
      <FindSpecialtiesSection />
      <TrainerList />
      <FooterStrip /> {/* ✅ add footer */}
    </main>
  );
}
