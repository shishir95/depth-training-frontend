import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import ResourcePage from "@/components/resourcepage/ResourcePage";
import FeaturedTraining from "@/components/membership/FeaturedTraining";
import PageShell from "@/components/layout/PageShell";

export const metadata = { title: "Resources | Depth Training" };

export default function ResourcePages() {
  return (
    <PageShell maxWidth="max-w-none" padY="py-16">
      <Header />
      <ResourcePage />
      <FeaturedTraining />
      <FooterStrip />
    </PageShell>
  );
}
