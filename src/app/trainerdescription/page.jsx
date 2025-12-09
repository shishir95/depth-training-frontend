import Header from "@/components/common/Header";
import Hero from "../../components/common/Hero";
import FooterStrip from "@/components/common/FooterStrip";
//import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import TrainerList from "@/components/trainers/TrainerList";
import TrainerDescriptionSection from "@/components/trainerdescription/TrainerDescriptionSection";
export const metadata = { title: "Trainer Description | Depth Training" };

export default function MembershipPage() {
  return (
    <main className="min-h-screen w-full bg-transparent text-white">
      <Header />
      <TrainerDescriptionSection />
      <TrainerList />
      <FooterStrip />
    </main>
  );
}
