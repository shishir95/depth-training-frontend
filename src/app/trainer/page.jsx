import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import FooterStrip from "@/components/common/FooterStrip";
//import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import TrainerList from "@/components/trainers/TrainerList";
export const metadata = { title: "Trainers | Depth Training" };
import Header from "@/components/common/Header";

export default function MembershipPage() {
  const heroContents = {
    title: "Meet Our Team and Specialties",
    subTitle:
      "Certified Experts in Physiotherapy, Rehabilitation and Fitness Performance",
    button: false,
    buttonLabel: "",
  };
  return (
    <main className="min-h-screen w-full bg-transparent text-white">
      <Header />
      <Hero {...heroContents} />
      <TrainerList />
      <FooterStrip />
    </main>
  );
}
