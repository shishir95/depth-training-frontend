import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrainerCard from "./components/TrainerCard";
import FindSpecialtiesSection from "./components/FindSpecialitiesSection";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <FindSpecialtiesSection
        title="Find My Specialties"
        subtitle="Not sure where to start? Let our AI guide you."
        ctaLabel="Click Here"
        href="#"
        onClick={undefined}
        className="border-t border-zinc-800"
      />
      <TeamSection />
    </div>
  );
}
