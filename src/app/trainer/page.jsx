import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import FooterStrip from "@/components/common/FooterStrip";
//import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import TrainerList from "@/components/trainers/TrainerList";
export const metadata = { title: "Membership | Depth Training" };
import Header from "@/components/common/Header";

export default function MembershipPage() {
  const heroContents = {
    title: "Meet The Depth Training Team",
    subTitle:
      " Please scroll through our team and explore their strengths and specialties!",
    button: false,
    buttonLabel: "",
    backgroundImage: "/trainers-hero.png",
    backgroundPosition: "center 20%",
  };
  return (
    <main className="bg-black text-white min-h-screen w-full">
      <Header />
      <Hero {...heroContents} />
      <TrainerList />
      <FooterStrip /> {/* ✅ add footer */}
    </main>
  );
}
