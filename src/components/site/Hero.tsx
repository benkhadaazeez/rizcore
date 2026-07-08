import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-port.jpg";

const lanes = [
  "Algiers → Niamey",
  "Algiers → Abuja",
  "Algiers → Ouagadougou",
  "Algiers → Abidjan",
  "Algiers → N'Djamena",
  "Algiers → Lagos",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = [
    { text: t("hero.title1"), accent: false },
    { text: t("hero.title2"), accent: false },
    { text: t("hero.accent"), accent: true },
    { text: t("hero.title3"), accent: false },
  ];

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-deep grain isolate"
    >
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 will-change-transform">
        <motion.img
          src={heroImg}
          alt="International cargo port at golden hour"
          className="size-full object-cover"
          width={1920}
          height={1080}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-deep/90 via-deep/50 to-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,oklch(0.16_0.07_252/0.6)_70%)]" />

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(oklch(0.98_0.005_240/0.35)_1px,transparent_1px),linear-gradient(90deg,oklch(0.98_0.005_240/0.35)_1px,transparent_1px)] [background-size:80px_80px]"
        style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }}
      />

      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 size-[480px] rounded-full bg-brand/30 blur-[140px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 size-[520px] rounded-full bg-leaf/20 blur-[160px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0.25 }}
        transition={{ delay: 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-0 inset-x-0 h-24 origin-top bg-deep z-20"
      />
      <motion.div
        aria-hidden
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0.4 }}
        transition={{ delay: 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 inset-x-0 h-32 origin-bottom bg-gradient-to-t from-deep via-deep/90 to-transparent z-20"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-36 lg:pt-44 pb-40 min-h-[100svh] flex flex-col justify-center"
      >
        <h1 className="font-display text-[12vw] sm:text-7xl lg:text-[7.5rem] xl:text-[9rem] font-bold text-deep-foreground leading-[0.92] tracking-tight">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-baseline me-[0.22em]">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${word.accent ? "text-gradient-brand italic font-light pe-2" : ""}`}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="max-w-xl text-base lg:text-lg text-deep-foreground/75 leading-relaxed"
          >
            {t("hero.lead")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.9 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center gap-3 rounded-full bg-white text-deep px-7 py-4 font-medium overflow-hidden shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-leaf to-leaf/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative">{t("hero.ctaPrimary")}</span>
              <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 text-deep-foreground px-7 py-4 font-medium hover:bg-white/[0.06] hover:border-leaf/60 transition-all"
            >
              {t("hero.ctaSecondary")}
              <ArrowRight className="size-4 opacity-70 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            </a>
          </motion.div>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="mt-10 flex flex-wrap gap-x-3 gap-y-3"
        >
          {[
            { icon: "🇩🇿", label: (t("hero.trust", { returnObjects: true }) as string[])[0] },
            { icon: "🤝", label: (t("hero.trust", { returnObjects: true }) as string[])[1] },
            { icon: "🌍", label: (t("hero.trust", { returnObjects: true }) as string[])[2] },
            { icon: "📦", label: (t("hero.trust", { returnObjects: true }) as string[])[3] },
          ].map((b) => (
            <li
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur px-4 py-2 text-xs sm:text-[13px] font-medium text-deep-foreground/85"
            >
              <span className="text-sm leading-none">{b.icon}</span>
              {b.label}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 z-30 border-t border-white/10 bg-deep/60 backdrop-blur-xl">
        <div className="flex items-center gap-4 py-3 overflow-hidden">
          <span className="shrink-0 px-6 lg:px-10 text-[10px] uppercase tracking-[0.3em] text-leaf">
            ● {t("hero.lanes")}
          </span>
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap text-xs uppercase tracking-[0.25em] text-deep-foreground/60"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              dir="ltr"
            >
              {[...lanes, ...lanes, ...lanes].map((l, i) => (
                <span key={i} className="flex items-center gap-12">
                  {l}
                  <span className="size-1 rounded-full bg-leaf/60" />
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}