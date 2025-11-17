import Image from "next/image";
import Header from "../../components/common/Header";
import Hero from "../../components/common/Hero";
import TrainerCard from "../../components/home/TrainerCard";
import TeamSection from "../../components/home/TeamSection";
import FindSpecialtiesSection from "../../components/common/FindSpecialitiesSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import ArticlesSection from "../../components/home/ArticleSection";
import FooterStrip from "@/components/common/FooterStrip";
import AnimationScroll from "@/components/common/AnimationScroll";
import HeroTitleAnimation from "@/components/home/HeroTitleAnimation";
import OurOfferSection from "@/components/home/OurOfferSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";

export default function Home() {
  const heroContents = {
    title: "Realize Your Potential",
    subTitle:
      "Depth Training & Physiotherapy is a fitness centre & rehab clinic focused on helping you achieve your personal goals. Whether you’re trying to get to the next level athletically, get in the best shape of your life, or recover from an injury, we have a program or treatment approach designed for you.",
    button: true,
    buttonLabel: "Book a Free Consultation",
  };
  return (
    <div className="home-page">
      <Header />
      <HeroTitleAnimation {...heroContents} />
      {[...Array(1)].map((_, i) => (
        <AnimationScroll key={i} delay={i * 0.2}>
          <FindSpecialtiesSection />
          <TeamSection />
          <ReviewsSection />
          <OurOfferSection />
          <FacilitiesSection />
          <ArticlesSection />
        </AnimationScroll>
      ))}

      <FooterStrip />
    </div>
  );
}
