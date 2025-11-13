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

export default function Home() {
  const heroContents = {
    title: "Depth Training",
    subTitle: "| Physio, Rehab & Fitness",
    button: true,
    buttonLabel: "Find My Specialities",
  };
  return (
    <div className="home-page">
      <Header />
      <Hero {...heroContents} />
      {[...Array(1)].map((_, i) => (
        <AnimationScroll key={i} delay={i * 0.0}>
          <FindSpecialtiesSection />
          <TeamSection />
          <ReviewsSection />
          <ArticlesSection />
        </AnimationScroll>
      ))}

      <FooterStrip />
    </div>
  );
}
