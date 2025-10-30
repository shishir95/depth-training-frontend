import Image from "next/image";
import Header from "../../components/home/Header";
import Hero from "../../components/home/Hero";
import TrainerCard from "../../components/home/TrainerCard";
import TeamSection from "../../components/home/TeamSection";
import FindSpecialtiesSection from "../../components/home/FindSpecialitiesSection";
import ReviewsSection from "@/components/membership/ReviewsSection";
import ArticlesSection from "../../components/home/ArticleSection";
import FooterStrip from "@/components/common/FooterStrip";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <FindSpecialtiesSection />
      <TeamSection />
      <ReviewsSection />
      <ArticlesSection />
      <FooterStrip />
    </div>
  );
}
