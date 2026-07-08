import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
import "@/i18n";

export const Route = createFileRoute("/")({
  component: Index,
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
