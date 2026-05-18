import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, Award, Globe2 } from "lucide-react";
import dates from "@/assets/product-dates.jpg";
import foodAlgeria from "@/assets/trade-food-algeria.jpg";
import containers from "@/assets/trade-containers.jpg";
import warehouse from "@/assets/trade-warehouse.jpg";
import cargoShip from "@/assets/trade-cargo-ship.jpg";
import africaMarket from "@/assets/trade-africa-market.jpg";

type Product = {
  img: string;
  name: string;
  tag: string;
  desc: string;
  origin: string;
  status: "core" | "on-request";
  formats: string[];
  index: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    img: dates,
    name: "Algerian Dates",
    tag: "Core expertise · Deglet Nour",
    desc: "Hand-selected from the legendary palm groves of southern Algeria. Honey-amber translucency, silky texture, balanced sweetness — our flagship export.",
    origin: "Biskra · Tolga · Ouargla",
    status: "core",
    formats: ["Bulk 5/10 kg", "Retail 250 g–1 kg", "Branched", "Pitted"],
    index: "01",
    featured: true,
  },
  {
    img: foodAlgeria,
    name: "Made in Algeria Food",
    tag: "Core expertise · Food products",
    desc: "A curated selection of Algerian food products — olive oil, orange blossom water, traditional pantry staples — sourced directly from trusted local producers.",
    origin: "Algeria — multi-region",
    status: "core",
    formats: ["Retail packs", "Bulk", "Private label"],
    index: "02",
  },
  {
    img: containers,
    name: "Construction Materials",
    tag: "Available on request",
    desc: "Cement, steel, ceramics and finishing materials sourced from Algerian manufacturers. Container-grade volumes for African construction projects.",
    origin: "Algeria",
    status: "on-request",
    formats: ["FCL", "Project-based"],
    index: "03",
  },
  {
    img: africaMarket,
    name: "Cosmetics",
    tag: "Available on request",
    desc: "Skincare, hair and personal care lines built for African markets — including natural and halal-certified ranges. Private label and turnkey programs.",
    origin: "Algeria",
    status: "on-request",
    formats: ["Retail", "OEM", "Private label"],
    index: "04",
  },
  {
    img: warehouse,
    name: "Household Products",
    tag: "Available on request",
    desc: "Detergents, cleaning agents and everyday home essentials. Reliable volume supply for distributors and wholesalers across West and Central Africa.",
    origin: "Algeria",
    status: "on-request",
    formats: ["Retail", "Bulk", "Distributor packs"],
    index: "05",
  },
  {
    img: cargoShip,
    name: "Industrial Supplies",
    tag: "Available on request",
    desc: "B2B industrial inputs, equipment and consumables. Sourced and shipped on demand through our Algerian supplier network.",
    origin: "Algeria",
    status: "on-request",
    formats: ["Project sourcing", "FCL", "Custom"],
    index: "06",
  },
];

const certs = [
  { icon: Award, label: "HACCP" },
  { icon: Leaf, label: "Organic ready" },
  { icon: Globe2, label: "ISO 22000" },
];

export function Products() {
  return (
    <section
      id="products"
      className="relative bg-background py-32 lg:py-40 overflow-hidden"
    >
      {/* Ambient decorations */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--deep)_1px,transparent_1px),linear-gradient(90deg,var(--deep)_1px,transparent_1px)] [background-size:120px_120px]"
        style={{ maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)" }}
      />
      <div className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-leaf/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 size-[520px] rounded-full bg-brand/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-brand font-medium"
            >
              <span className="h-px w-10 bg-brand" />
              03 — Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-bold text-deep leading-[1.02] tracking-tight"
            >
              Algerian dates,{" "}
              <span className="italic font-light text-brand">Made in Algeria</span>{" "}
              — and beyond on request.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-muted-foreground text-base leading-relaxed">
              Our core expertise is premium Algerian dates and Made in Algeria
              food products. Beyond food, we source construction materials,
              cosmetics, household goods and industrial supplies on request.
            </p>
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-deep/80"
                >
                  <c.icon className="size-3.5 text-leaf" />
                  {c.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[minmax(440px,_auto)]">
          {products.map((p, i) => (
            <ProductCard key={p.name} p={p} i={i} />
          ))}

          {/* CTA tile */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-deep via-deep to-brand p-8 lg:p-10 flex flex-col justify-between min-h-[440px] text-deep-foreground shadow-card"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 [background-image:radial-gradient(oklch(0.78_0.19_135/0.6)_1px,transparent_1px)] [background-size:24px_24px]"
              style={{ maskImage: "radial-gradient(ellipse at top right, black, transparent 70%)" }}
            />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.3em] text-leaf">Next step</div>
              <h3 className="mt-4 font-display text-3xl lg:text-4xl font-bold leading-tight">
                Need a specific product for your market?
              </h3>
              <p className="mt-4 text-deep-foreground/70 max-w-sm">
                Our Algerian sourcing network goes well beyond this list. Tell
                us your target market and volumes — we'll build the offer.
              </p>
            </div>
            <div className="relative inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-deep-foreground group-hover:text-leaf transition-colors">
              Request a quote
              <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 group-hover:bg-leaf group-hover:border-leaf group-hover:text-deep transition-all">
                <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[28px] bg-deep text-deep-foreground shadow-card isolate ${
        p.featured ? "md:col-span-2 lg:col-span-2 lg:row-span-1" : ""
      }`}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          width={1024}
          height={1280}
          className="size-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/70 to-deep/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/40 via-transparent to-transparent" />
      </div>

      {/* Hover sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.19_135/0.18),transparent_50%)]"
      />

      {/* Top row */}
      <div className="relative z-10 flex items-start justify-between p-7 lg:p-8">
        <span className="font-display text-xs tracking-[0.3em] text-deep-foreground/50">
          {p.index}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-leaf">
          <Leaf className="size-3" />
          {p.status === "core" ? "Core export" : "On request"}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 inset-x-0 z-10 p-7 lg:p-8">
        <div className="text-[10px] uppercase tracking-[0.3em] text-leaf">
          {p.tag}
        </div>
        <h3 className="mt-3 font-display text-2xl lg:text-3xl font-bold leading-tight">
          {p.name}
        </h3>

        <p className="mt-3 text-sm text-deep-foreground/65 max-w-md leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
          {p.desc}
        </p>

        {/* Reveal panel */}
        <div className="mt-5 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="overflow-hidden">
            <div className="pt-2 pb-1 flex flex-wrap gap-1.5">
              {p.formats.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-deep-foreground/75"
                >
                  {f}
                </span>
              ))}
            </div>
            <div className="mt-3 text-[11px] text-deep-foreground/55">
              <span className="text-deep-foreground/40 uppercase tracking-[0.25em]">Origin · </span>
              {p.origin}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs uppercase tracking-[0.3em] text-deep-foreground/75 group-hover:text-leaf transition-colors">
            Request datasheet
          </span>
          <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 group-hover:bg-leaf group-hover:border-leaf group-hover:text-deep transition-all">
            <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform duration-500" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
