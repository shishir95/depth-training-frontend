// src/app/home/page.jsx
"use client";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import CustomerReviews from "@/components/common/CustomerReviews";
import FindSpecialtiesSection from "@/components/common/FindSpecialitiesSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import HeroTitleAnimation from "@/components/home/HeroTitleAnimation";
import OurOfferSection from "@/components/home/OurOfferSection";
import TeamSection from "@/components/home/TeamSection";
import ArticlesSection from "@/components/home/ArticleSection";
import ScrollSection from "@/components/home/ScrollSection";
import AnimatedFitnessBackdrop from "@/components/home/AnimatedFitnessBackdrop";

export default function Home() {
  const heroContents = {
    title: "Realize Your Potential",
    subTitle:
      "Depth Training & Physiotherapy is a fitness centre & rehab clinic focused on helping you achieve your personal goals. Whether you’re trying to get to the next level athletically, get in the best shape of your life, or recover from an injury, we have a program or treatment approach designed for you.",
    button: true,
    buttonLabel: "Book a Free Consultation",
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#020109] text-white">
      {/* 🔥 global fitness background */}
      <AnimatedFitnessBackdrop />

      <div className="relative z-10">
        {/* full-width header */}
        <Header />

        {/* HERO */}
        <HeroTitleAnimation {...heroContents} />

        {/* CONTENT SECTIONS */}
        <section className="relative">
          <div className="px-4 sm:px-6 lg:px-8">
            <ScrollSection variant="fade-up">
              <FindSpecialtiesSection />
            </ScrollSection>
          </div>
        </section>

        <div className="relative flex flex-col gap-16 px-4 pb-20 sm:px-6 lg:px-8">
          <ScrollSection variant="slide-left">
            <TeamSection />
          </ScrollSection>

          <ScrollSection variant="fade-up">
            <OurOfferSection />
          </ScrollSection>

          <ScrollSection variant="slide-right">
            <FacilitiesSection />
          </ScrollSection>

          <ScrollSection variant="fade-up">
            <CustomerReviews />
          </ScrollSection>

          <ScrollSection variant="fade-up">
            <ArticlesSection />
          </ScrollSection>
        </div>

        <FooterStrip />
      </div>
    </main>
  );
}
