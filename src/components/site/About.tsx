import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import algiersImg from "@/assets/algiers-white-city.jpg";

export function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative bg-background py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-brand font-medium">
            {t("about.eyebrow")}
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep leading-[1.05]">
            {t("about.title1")}<br />
            {t("about.title2")} <span className="text-brand">{t("about.titleAccent")}</span>.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            {t("about.body")}
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { k: t("about.pillar1Title"), v: t("about.pillar1Body") },
              { k: t("about.pillar2Title"), v: t("about.pillar2Body") },
            ].map((it) => (
              <div key={it.k} className="border-s-2 border-leaf ps-5">
                <div className="font-display font-semibold text-deep">{it.k}</div>
                <p className="mt-2 text-sm text-muted-foreground">{it.v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-brand-gradient rounded-3xl blur-2xl opacity-20" />
          <div className="relative rounded-3xl overflow-hidden bg-deep shadow-card aspect-[4/5]">
            <img
              src={algiersImg}
              alt="Algiers — Alger la Blanche, white Mediterranean architecture"
              loading="lazy"
              width={1600}
              height={1200}
              className="size-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
            <div className="absolute top-6 inset-x-6 flex items-center justify-between text-deep-foreground/90">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
                <span className="size-1.5 rounded-full bg-leaf animate-pulse" />
                {t("about.badgeStatus")}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-deep-foreground/60">{t("about.badgeEst")}</span>
            </div>
            <div className="absolute bottom-8 inset-x-8 text-deep-foreground">
              <div className="text-xs uppercase tracking-[0.3em] text-leaf">{t("about.headquartersEyebrow")}</div>
              <div className="mt-3 font-display text-2xl font-bold leading-tight">
                {t("about.headquartersTitle")}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-deep-foreground/60">
                {t("about.headquartersLocation")}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}