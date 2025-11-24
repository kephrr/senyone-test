import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Defis from "@/components/DefisSection";
import { MetricsSection } from "@/components/MetriqueSection";
import Screenshots from "@/components/ScreenshotsSection";
import QuiAdonsNousSection from "@/components/QuiAdonsNousSection";
import NosReussitesClient from "@/components/NosReussitesClient";
import IlsNousOntFaitConfiance from "@/components/IlsNousOntFaitConfiance";
import EcosystemeTechnologique from "@/components/EcosystemeTechnologique";
import TransformationCTA from "@/components/PretAtransformerCTA";

const Index = () => {
  return (
    <div className="min-h-screen max-w-screen relative overflow-hidden bg-[#efefef]">
      <Navbar />
      <div className="relative">
        <HeroSection />
        <Screenshots />
      </div>
      <div className="my-2">
        <MetricsSection />
      </div>
      <Defis />
      <QuiAdonsNousSection />
      <NosReussitesClient />
      <IlsNousOntFaitConfiance />
      <EcosystemeTechnologique />
      <TransformationCTA />
      <Footer />
    </div>
  );
};

export default Index;
