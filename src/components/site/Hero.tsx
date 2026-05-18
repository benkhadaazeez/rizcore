import { motion } from "framer-motion";
import heroImg from "@/assets/hero-port.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-deep grain">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Global export port"
          className="size-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/40 to-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-32 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-deep-foreground/80">
            <span className="size-1.5 rounded-full bg-leaf animate-pulse" />
            International Export House · Est. Algeria
          </div>

          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-deep-foreground leading-[0.95]">
            Exporting the
            <br />
            finest of <span className="text-gradient-brand">Algeria</span>
            <br />
            to the world.
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-deep-foreground/70 max-w-2xl leading-relaxed">
            RIZCORE is a premium international trading company delivering authentic Algerian
            products — dates, olive oil, orange blossom water and private-label solutions —
            across five continents.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-white text-deep px-7 py-3.5 font-medium hover:bg-leaf transition-all hover:translate-y-[-2px] shadow-glow"
            >
              Discover our products
              <span>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-deep-foreground px-7 py-3.5 font-medium hover:bg-white/5 transition-all"
            >
              Become a partner
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6 lg:px-10 flex items-end justify-between text-deep-foreground/60 text-xs uppercase tracking-[0.3em]"
        >
          <span>Scroll to explore</span>
          <span className="hidden sm:block">Algiers · Marseille · Dakar · Dubai</span>
        </motion.div>
      </div>
    </section>
  );
}
