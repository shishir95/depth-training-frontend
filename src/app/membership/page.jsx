import Navbar from "../../components/common/Navbar";
import Header from "../../components/home/Header";
import Hero from "../../components/common/Hero";
import FindSpecialities from "../../components/membership/FindSpecialities";
import PlansSection from "../../components/membership/PlansSection";
import ReviewsSection from "../../components/membership/ReviewsSection";
import FeaturedTraining from "../../components/membership/FeaturedTraining";
import FooterStrip from "../../components/membership/FooterStrip";

export const metadata = { title: "Membership | Depth Training" };

export default function MembershipPage() {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <FindSpecialities />
      <PlansSection />
      <ReviewsSection />
      <FeaturedTraining />
      <FooterStrip /> {/* ✅ add footer */}
    </main>
  );
}
