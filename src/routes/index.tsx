import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhyAlgeria } from "@/components/site/WhyAlgeria";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { WhyRizcore } from "@/components/site/WhyRizcore";
import { AfricaMap } from "@/components/site/AfricaMap";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { LANGS } from "@/i18n";
import "@/i18n";
import heroImg from "@/assets/hero-port.jpg";

const TITLE = "RIZCORE | Algerian Export Company for African Markets";
const DESCRIPTION =
  "RIZCORE is an Algerian B2B export company in Algiers, sourcing and distributing premium Algerian dates, agri-food, industrial and construction goods to African and international markets.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://rizcore.dz/" },
      { property: "og:locale", content: "en" },
      { property: "og:locale:alternate", content: "fr" },
      { property: "og:locale:alternate", content: "ar" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: "https://rizcore.dz/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://rizcore.dz/" },
      { rel: "alternate", hrefLang: "en", href: "https://rizcore.dz/" },
      { rel: "alternate", hrefLang: "fr", href: "https://rizcore.dz/" },
      { rel: "alternate", hrefLang: "ar", href: "https://rizcore.dz/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "RIZCORE",
          url: "https://rizcore.dz/",
          image: "https://rizcore.dz/images/about-rizcore.jpg",
          email: "contact@rizcore.dz",
          telephone: "+213551527681",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Algiers",
            addressCountry: "DZ",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-foreground"
    >
      <SmoothScroll />
      <LanguageHydrator />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <WhyAlgeria />
      <About />
      <Services />
      <Products />
      <WhyRizcore />
      <AfricaMap />
      <Contact />
      <Footer />
    </motion.main>
  );
}

function LanguageHydrator() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem("rz_lang");
      const lang = LANGS.find((l) => l.code === stored);
      if (!lang) return;

      document.documentElement.lang = lang.code;
      document.documentElement.dir = lang.dir;
      if (i18n.language !== lang.code) {
        i18n.changeLanguage(lang.code);
      }
    }, 150);

    return () => window.clearTimeout(timer);
  }, [i18n]);

  return null;
}
