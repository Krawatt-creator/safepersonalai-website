import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OwnershipSection from "@/components/OwnershipSection";
import BoundarySection from "@/components/BoundarySection";
import UseCasesSection from "@/components/UseCasesSection";
import ModulesPricing from "@/components/ModulesPricing";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <OwnershipSection />
        <BoundarySection />
        <UseCasesSection />
        <ModulesPricing />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
