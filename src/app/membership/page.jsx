import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import FindSpecialities from "../../components/membership/FindSpecialities";
import PlansSection from "../../components/membership/PlansSection";
import ReviewsSection from "../../components/common/ReviewsSection";
import FeaturedTraining from "../../components/membership/FeaturedTraining";
import FooterStrip from "@/components/common/FooterStrip";
import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import Header from "@/components/common/Header";

export const metadata = { title: "Membership | Depth Training" };

export default function MembershipPage() {
  const heroContents = {
    title: "Start Today Feel Better Tomorrow",
    subTitle: "First class is free — take the first step now.",
    button: false,
    buttonLabel: "",
  };
  return (
    <main className="bg-black text-white min-h-screen w-full ">
      <Header />
      <Hero {...heroContents} />
      <FindSpecialtiesSection />
      <PlansSection />
      <ReviewsSection />
      <FeaturedTraining />
      <FooterStrip />
    </main>
  );
}
