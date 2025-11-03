import Navbar from "../../components/common/Navbar";
import Header from "@/components/common/Header";
import Hero from "../../components/common/Hero";
import FooterStrip from "@/components/common/FooterStrip";
import ResourcePage from "@/components/resourcepage/ResourcePage";
import TrainerList from "@/components/trainers/TrainerList";
export const metadata = { title: "Membership | Depth Training" };
import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import FeaturedTraining from "@/components/membership/FeaturedTraining";

export default function ResourcePages() {
  const heroContents = {
    title: "Resources to Help You Move Better",
    subTitle:
      "Expert guidance from our trainers and therapists to help you recover smarter and train better.",
    button: false,
    buttonLabel: "",
  };
  return (
    <main className="bg-black text-white min-h-screen w-full">
      <Header />
      <Hero {...heroContents} />
      <FindSpecialtiesSection />
      <ResourcePage />
      <ReviewsSection />
      <FeaturedTraining />
      <FooterStrip /> {/* ✅ add footer */}
    </main>
  );
}
