import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Network, Settings2, ShieldCheck, Globe2, FileCheck2, Handshake } from "lucide-react";

const icons = [Network, Settings2, ShieldCheck, Globe2, FileCheck2, Handshake];

export function WhyRizcore() {
  const { t } = useTranslation();
  const cards = t("whyRizcore.cards", { returnObjects: true }) as { title: string; desc: string }[];
  return (
    <section id="why-rizcore" className="relative bg-deep py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.18_256_/_0.22),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-foreground leading-[1.05]">
            {t("whyRizcore.title")}
          </h2>
          <p className="mt-6 text-lg text-deep-foreground/70 leading-relaxed">
            {t("whyRizcore.body")}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {cards.map((c, i) => {
            const Icon = icons[i] ?? Network;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group bg-deep p-8 lg:p-9 hover:bg-deep/60 transition-colors"
              >
                <div className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-leaf group-hover:bg-leaf group-hover:text-deep transition-all">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-deep-foreground leading-snug">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-deep-foreground/60 leading-relaxed">
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