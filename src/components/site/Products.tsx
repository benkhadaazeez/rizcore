import { motion } from "framer-motion";
import { ArrowUpRight, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import dates from "@/assets/product-dates-custom.jpg";
import fruits from "@/assets/sector-fruits.jpg";
import food from "@/assets/sector-food.jpg";
import industrial from "@/assets/sector-industrial.jpg";

type SectorKey = "dates" | "fruits" | "agrifood" | "industrial";

type Sector = {
  key: SectorKey;
  img: string;
  index: string;
  featured?: boolean;
};

const sectors: Sector[] = [
  { key: "dates", img: dates, index: "01", featured: true },
  { key: "fruits", img: fruits, index: "02" },
  { key: "agrifood", img: food, index: "03" },
  { key: "industrial", img: industrial, index: "04" },
];

export function Products() {
  const { t } = useTranslation();
  return (
    <section id="products" className="relative bg-background py-32 lg:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--deep)_1px,transparent_1px),linear-gradient(90deg,var(--deep)_1px,transparent_1px)] [background-size:120px_120px]"
        style={{ maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)" }}
      />
      <div className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-leaf/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 size-[520px] rounded-full bg-brand/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
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
              {t("products.eyebrow")}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-bold text-deep leading-[1.02] tracking-tight"
            >
              {t("products.title1")}{" "}
              <span className="italic font-light text-brand">{t("products.titleAccent")}</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <p className="text-muted-foreground text-base leading-relaxed">
              {t("products.body")}
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[minmax(380px,_auto)]">
          {sectors.map((p, i) => (
            <SectorCard key={p.key} p={p} i={i} />
          ))}

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-deep via-deep to-brand p-8 lg:p-10 flex flex-col justify-between min-h-[380px] text-deep-foreground shadow-card"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 [background-image:radial-gradient(oklch(0.78_0.19_135/0.6)_1px,transparent_1px)] [background-size:24px_24px]"
              style={{ maskImage: "radial-gradient(ellipse at top right, black, transparent 70%)" }}
            />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.3em] text-leaf">{t("products.ctaLink")}</div>
              <h3 className="mt-4 font-display text-3xl lg:text-4xl font-bold leading-tight">
                {t("products.ctaTitle")}
              </h3>
              <p className="mt-4 text-deep-foreground/70 max-w-sm">
                {t("products.ctaBody")}
              </p>
            </div>
            <div className="relative inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-deep-foreground group-hover:text-leaf transition-colors">
              {t("products.ctaLink")}
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

function SectorCard({ p, i }: { p: Sector; i: number }) {
  const { t } = useTranslation();
  const name = t(`products.sectors.${p.key}.name`);
  const blurb = t(`products.sectors.${p.key}.blurb`);
  const tag = t(`products.sectors.${p.key}.tag`);
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[28px] bg-deep text-deep-foreground shadow-card isolate min-h-[380px] block ${
        p.featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className="absolute inset-0">
        <img
          src={p.img}
          alt={name}
          loading="lazy"
          width={1200}
          height={1400}
          className="size-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/70 to-deep/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/40 via-transparent to-transparent" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.19_135/0.18),transparent_50%)]"
      />

      <div className="relative z-10 flex items-start justify-between p-7 lg:p-8">
        <span className="font-display text-xs tracking-[0.3em] text-deep-foreground/50">{p.index}</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-leaf">
          <Leaf className="size-3" />
          {tag}
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 p-7 lg:p-8">
        <div className="text-[10px] uppercase tracking-[0.3em] text-leaf">{tag}</div>
        <h3 className="mt-3 font-display text-2xl lg:text-3xl font-bold leading-tight">
          {name}
        </h3>
        <p className="mt-3 text-sm text-deep-foreground/70 max-w-md leading-relaxed">
          {blurb}
        </p>
        <div className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-deep-foreground/70 group-hover:text-leaf transition-colors">
          {t("products.learnMore")}
          <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 group-hover:bg-leaf group-hover:border-leaf group-hover:text-deep transition-all">
            <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform duration-500" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}