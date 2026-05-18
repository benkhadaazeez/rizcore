import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { AfricaMap } from "@/components/site/AfricaMap";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <AfricaMap />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
