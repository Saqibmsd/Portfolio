
import ApproachSection from "./components/pages/home/ApproachSection";
import ContactCTA from "./components/pages/home/ContactCTA";
import ContactSection from "./components/pages/home/ContactSection";
import CoreValues from "./components/pages/home/CoreValues";
import DesignSection from "./components/pages/home/DesignSection";
import FAQSection from "./components/pages/home/FAQSection";
import Hero from "./components/pages/home/Hero";
import PricingSection from "./components/pages/home/PricingSection";
import ProcessSection from "./components/pages/home/ProcessSection";
import ProjectDetailSection from "./components/pages/home/ProjectDetailSection";
import ServicesSection from "./components/pages/home/ServicesSection";
import WorkScroller from "./components/pages/home/WorkScroller";
export default function Home() {
  return (
    <>
      <Hero />
      <DesignSection />
      <ProjectDetailSection />
      <ApproachSection />
      <ServicesSection />
      <ContactCTA />
      <ProcessSection />
      <WorkScroller />
      <CoreValues />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}