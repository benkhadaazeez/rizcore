import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Ship, Package, ShieldCheck, Globe2, Factory, FileCheck2 } from "lucide-react";

const icons = [Package, ShieldCheck, Ship, Globe2, Factory, FileCheck2];

export function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as { title: string; desc: string }[];
  return (
    <section id="services" className="relative bg-deep py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.18_256_/_0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-leaf font-medium">
            {t("services.eyebrow")}
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-foreground leading-[1.05]">
            {t("services.title1")} <span className="text-gradient-brand">{t("services.titleAccent")}</span>
          </h2>
          <p className="mt-6 text-lg text-deep-foreground/70">
            {t("services.body")}
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {items.map((s, i) => {
            const Icon = icons[i] ?? Package;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group bg-deep p-8 lg:p-10 hover:bg-deep/60 transition-colors"
              >
                <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-leaf group-hover:bg-leaf group-hover:text-deep transition-all">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-deep-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-deep-foreground/60 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}