import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Anchor, Globe2, Ship } from "lucide-react";
import heroImg from "@/assets/hero-port.jpg";

const headline = [
  { text: "Exporting", accent: false },
  { text: "the", accent: false },
  { text: "finest", accent: false },
  { text: "of", accent: false },
  { text: "Algeria", accent: true },
  { text: "to", accent: false },
  { text: "the", accent: false },
  { text: "world.", accent: false },
];

const lanes = [
  "Algiers → Niamey",
  "Algiers → Abuja",
  "Algiers → Ouagadougou",
  "Algiers → Abidjan",
  "Algiers → N'Djamena",
  "Algiers → Lagos",
];

const tiles = [
  { icon: Globe2, k: "2025", v: "Activity started" },
  { icon: Ship, k: "2", v: "Active markets" },
  { icon: Anchor, k: "3+", v: "Upcoming expansions" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-deep grain isolate"
    >
      {/* Background image with Ken Burns + parallax */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <motion.img
          src={heroImg}
          alt="International cargo port at golden hour"
          className="size-full object-cover"
          width={1920}
          height={1080}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.75 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/85 via-deep/40 to-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,oklch(0.16_0.07_252/0.6)_70%)]" />

      {/* Animated grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(oklch(0.98_0.005_240/0.35)_1px,transparent_1px),linear-gradient(90deg,oklch(0.98_0.005_240/0.35)_1px,transparent_1px)] [background-size:80px_80px]"
        style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }}
      />

      {/* Floating glow orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 size-[480px] rounded-full bg-brand/30 blur-[140px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 size-[520px] rounded-full bg-leaf/25 blur-[160px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cinematic letterbox bars */}
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

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-36 lg:pt-44 pb-40 min-h-[100svh] flex flex-col justify-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-deep-foreground/85"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-leaf opacity-75 animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-leaf" />
          </span>
          Algerian Export House
          <span className="h-3 w-px bg-white/20" />
          Africa-focused · Est. 2025
        </motion.div>

        {/* Headline with staggered word reveal */}
        <h1 className="mt-10 font-display text-[12vw] sm:text-7xl lg:text-[7.5rem] xl:text-[9rem] font-bold text-deep-foreground leading-[0.92] tracking-tight">
          {headline.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.22em]">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  delay: 0.8 + i * 0.08,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block ${word.accent ? "text-gradient-brand italic font-light pr-2" : ""}`}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subline + actions */}
        <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.9 }}
            className="max-w-xl text-base lg:text-lg text-deep-foreground/70 leading-relaxed"
          >
            RIZCORE is an Algerian export company delivering premium dates and
            Made in Algeria food products across African markets — starting from
            Niger and Nigeria, expanding fast through West and Central Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.9 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center gap-3 rounded-full bg-white text-deep px-7 py-4 font-medium overflow-hidden shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-leaf to-leaf/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative">Our Company</span>
              <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 text-deep-foreground px-7 py-4 font-medium hover:bg-white/[0.06] hover:border-leaf/60 transition-all"
            >
              Explore Services
              <ArrowRight className="size-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Floating stat tiles */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 1.9 } },
          }}
          className="mt-16 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl"
        >
          {tiles.map((t) => (
            <motion.div
              key={t.v}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 sm:p-5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <t.icon className="size-4 text-leaf" />
              <div className="mt-3 font-display text-2xl sm:text-3xl font-bold text-deep-foreground">
                {t.k}
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-deep-foreground/55 mt-1">
                {t.v}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom marquee of trade lanes */}
      <div className="absolute bottom-0 inset-x-0 z-30 border-t border-white/10 bg-deep/60 backdrop-blur-xl">
        <div className="flex items-center gap-4 py-3 overflow-hidden">
          <span className="shrink-0 pl-6 lg:pl-10 text-[10px] uppercase tracking-[0.3em] text-leaf">
            ● Live trade lanes
          </span>
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap text-xs uppercase tracking-[0.25em] text-deep-foreground/60"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-deep-foreground/55"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="relative h-10 w-px overflow-hidden bg-white/15">
          <motion.div
            className="absolute inset-x-0 top-0 h-4 bg-leaf"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
