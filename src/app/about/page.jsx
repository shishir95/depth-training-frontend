import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import ReviewsSection from "@/components/common/ReviewsSection";
import FooterStrip from "@/components/common/FooterStrip";
import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import AboutUs from "@/components/about/AboutUs";
import ContactSection from "@/components/about/ContactSection";

export const metadata = { title: "About | Depth Training" };

export default function AboutPage() {
  const heroContents = {
    title: "Train Smarter. Recover Faster. Live Stronger.",
    subTitle:
      "Depth Training helps people move better, feel better, and perform at their best.",
    button: false,
    buttonLabel: "",
  };

  return (
    <main className="bg-black text-white min-h-screen w-full">
      <Header />
      <Hero {...heroContents} />
      <FindSpecialtiesSection />
      <AboutUs />
      <ReviewsSection />
      <ContactSection />
      <FooterStrip />
    </main>
  );
}
