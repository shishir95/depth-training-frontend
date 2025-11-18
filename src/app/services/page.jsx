import Image from "next/image";
import Header from "../../components/common/Header";
import Hero from "../../components/common/Hero";
import TrainerCard from "../../components/home/TrainerCard";
import TeamSection from "../../components/home/TeamSection";
//import FindSpecialtiesSection from "../../components/common/FindSpecialitiesSection";
import ArticlesSection from "../../components/home/ArticleSection";
import FooterStrip from "@/components/common/FooterStrip";
import FeaturedTraining from "@/components/membership/FeaturedTraining";
import QuestionSection from "@/components/services/QuestionSection";
import QuestionSectionTwo from "@/components/services/QuestionSectionTwo";

export default function Home() {
  const heroContents = {
    title: "Personal Trainings",
    subTitle:
      "The ultimate, individualized, customizable training experience with a variety of training session increments available.",
    button: true,
    buttonLabel: "Call Us",
  };
  return (
    <div className="home-page">
      <Header />
      <Hero {...heroContents} />
      <QuestionSection />
      <QuestionSectionTwo />
      <FeaturedTraining />
      <FooterStrip />
    </div>
  );
}
