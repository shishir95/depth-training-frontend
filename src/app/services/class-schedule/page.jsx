import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import FeaturedTraining from "@/components/membership/FeaturedTraining";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import ClassScheduleSection from "@/components/services/classSchedule/classScheduleSection";
import TrainingPictureSection from "@/components/services/classSchedule/TrainingPictureSection";

export default function ServicesPage() {
  return (
    <main>
      <Header></Header>
      <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-16">
        <ClassScheduleSection></ClassScheduleSection>
        <div id="services-catalog">
          <ServicesShowcase />
        </div>
        <TrainingPictureSection></TrainingPictureSection>
        <FeaturedTraining />
      </div>
      <FooterStrip />
    </main>
  );
}
