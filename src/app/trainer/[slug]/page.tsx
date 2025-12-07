import { TRAINERS } from "@/data/trainers";
import { notFound } from "next/navigation";

import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import TrainerList from "@/components/trainers/TrainerList";
import TrainerDescriptionSection from "@/components/trainerdescription/TrainerDescriptionSection";

type PageProps = {
  params: {
    slug: string;
  };
};

export const metadata = {
  title: "Trainer | Depth Training",
};

export default function TrainerDescriptionPage({ params }: PageProps) {
  const trainer = TRAINERS.find((t) => t.slug === params.slug);

  if (!trainer) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen w-full">
      <Header />

      {/* This is the same hero layout as the old /trainerdescription page,
          but now it's filled with this trainer's info */}
      <TrainerDescriptionSection
        name={trainer.name}
        role={trainer.title}
        // for now we just pass one paragraph; you can split/add more later
        paragraphs={[trainer.bio]}
        // if later you add trainer.photo in TRAINERS, you can pass it here:
        // photo={trainer.photo ?? "/assets/image.png"}
      />

      {/* Optional: keep the list of trainers below, same as old page */}
      <TrainerList />

      <FooterStrip />
    </main>
  );
}
