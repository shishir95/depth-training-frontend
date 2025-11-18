import Header from "@/components/common/Header";
import Hero from "../../components/common/Hero";
import FooterStrip from "@/components/common/FooterStrip";
import ResourcePage from "@/components/resourcepage/ResourcePage";
import FeaturedTraining from "@/components/membership/FeaturedTraining";

export const metadata = { title: "Membership | Depth Training" };

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
      <ResourcePage />
      <FeaturedTraining />
      <FooterStrip /> {/* ✅ add footer */}
    </main>
  );
}
