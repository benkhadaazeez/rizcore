import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin, Wheat, Factory, Waypoints } from "lucide-react";

const icons = [MapPin, Wheat, Factory, Waypoints];

export function WhyAlgeria() {
  const { t } = useTranslation();
  const cards = t("whyAlgeria.cards", { returnObjects: true }) as { title: string; desc: string }[];
  return (
    <section id="why-algeria" className="relative bg-background py-28 lg:py-36 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 size-[520px] rounded-full bg-brand/10 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-brand font-medium">
            {t("whyAlgeria.eyebrow")}
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep leading-[1.05]">
            {t("whyAlgeria.title")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t("whyAlgeria.body")}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {cards.map((c, i) => {
            const Icon = icons[i] ?? MapPin;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-7 lg:p-8 hover:border-leaf/50 hover:shadow-card transition-all"
              >
                <div className="size-12 rounded-xl bg-deep/5 border border-border flex items-center justify-center text-brand group-hover:bg-leaf group-hover:text-deep group-hover:border-leaf transition-all">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-deep leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}