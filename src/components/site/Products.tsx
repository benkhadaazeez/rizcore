import { motion } from "framer-motion";
import dates from "@/assets/product-dates.jpg";
import orange from "@/assets/product-orange-blossom.jpg";
import olive from "@/assets/product-olive-oil.jpg";
import margarine from "@/assets/product-margarine.jpg";
import privateLabel from "@/assets/product-private-label.jpg";

const products = [
  { img: dates, name: "Algerian Dates", tag: "Premium Deglet Nour & Medjool", desc: "Hand-selected from the palm groves of Biskra and Tolga." },
  { img: olive, name: "Extra Virgin Olive Oil", tag: "Cold-pressed · Single origin", desc: "Mediterranean groves, low acidity, intense aromatic profile." },
  { img: orange, name: "Orange Blossom Water", tag: "Distilled · Artisanal", desc: "Traditional double distillation of pure Citrus aurantium petals." },
  { img: margarine, name: "Premium Margarine", tag: "Industrial & retail formats", desc: "Tailored fat profiles for bakery, pastry and food industries." },
  { img: privateLabel, name: "Private Label", tag: "OEM · Turnkey", desc: "Custom formulation, packaging and branding for your market." },
];

export function Products() {
  return (
    <section id="products" className="relative bg-background py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-brand font-medium">
              03 — Products
            </div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep leading-[1.05]">
              A curated <span className="text-brand">portfolio</span> of Algerian excellence.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Each product is sourced, controlled and shipped under the RIZCORE
            standard — premium grade only.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl bg-deep shadow-card ${
                i === 0 ? "lg:row-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5] lg:aspect-[3/5]" : "aspect-[4/5]"}`}>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-7 lg:p-8 text-deep-foreground">
                <div className="text-[10px] uppercase tracking-[0.3em] text-leaf">{p.tag}</div>
                <h3 className="mt-2 font-display text-2xl lg:text-3xl font-bold">{p.name}</h3>
                <p className="mt-3 text-sm text-deep-foreground/70 max-w-sm">{p.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-deep-foreground/80 group-hover:text-leaf transition-colors">
                  Request datasheet
                  <span>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
