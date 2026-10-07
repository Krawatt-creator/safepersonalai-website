import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LaptopRevealSection from "@/components/LaptopRevealSection";
import OwnershipSection from "@/components/OwnershipSection";
import BoundarySection from "@/components/BoundarySection";
import ProductUseCasesSection from "@/components/ProductUseCasesSection";
import ModulesPricing from "@/components/ModulesPricing";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AppShowcase from "@/components/AppShowcase";
import ScrollBackdrop from "@/components/ScrollBackdrop";
import { showcase } from "@/i18n/showcase";
import JsonLd from "@/components/JsonLd";
import { homeStructuredData } from "@/lib/structured-data";
import { languageAlternates, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

// The home page, the same in every language: only `dict` changes.
export function homeMetadata(lang: Locale, dict: Dictionary): Metadata {
  return {
    title: { absolute: dict.meta.homeTitle },
    description: dict.meta.homeDescription,
    alternates: {
      canonical: localePath(lang, "/"),
      languages: languageAlternates("/"),
    },
  };
}

export default function HomeView({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <>
      <JsonLd data={homeStructuredData(lang, dict)} />
      <ScrollBackdrop />
      <Nav lang={lang} t={dict.nav} path="/" />
      <main className="flex-1">
        <Hero lang={lang} dict={dict} />
        <LaptopRevealSection t={dict.laptop} />
        <OwnershipSection dict={dict} />
        <BoundarySection t={dict.boundary} />
        <ProductUseCasesSection t={dict.useCases} />
        <AppShowcase t={showcase[lang]} />
        <ModulesPricing lang={lang} dict={dict} />
        <TrustSection t={dict.trust} />
        <FAQSection t={dict.faq} />
      </main>
      <Footer lang={lang} t={dict.footer} path="/" />
    </>
  );
}
