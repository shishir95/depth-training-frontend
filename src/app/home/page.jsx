import Image from "next/image";
import Header from "../../components/common/Header";
import Hero from "../../components/common/Hero";
import TrainerCard from "../../components/home/TrainerCard";
import TeamSection from "../../components/home/TeamSection";
import FindSpecialtiesSection from "../../components/common/FindSpecialitiesSection";
import ReviewsSection from "@/components/common/ReviewsSection";
import ArticlesSection from "../../components/home/ArticleSection";
import FooterStrip from "@/components/common/FooterStrip";

export default function Home() {
  const heroContents = {
    title: "Depth Training | Physio, Rehab & Fitness",
    subTitle: "",
    button: false,
    buttonLabel: "",
  };
  return (
    <div className="home-page">
      <Header />
      <Hero {...heroContents} />
      <FindSpecialtiesSection />
      <TeamSection />
      <ReviewsSection />
      <ArticlesSection />
      <FooterStrip />
    </div>
  );
}
