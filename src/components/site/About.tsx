import { motion } from "framer-motion";
import tradeImg from "@/assets/about-trade.jpg";

export function About() {
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
            01 — About RIZCORE
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep leading-[1.05]">
            A trusted bridge between<br />
            <span className="text-brand">producers</span> and <span className="text-brand">global markets</span>.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            For more than a decade, RIZCORE has built strategic supply chains from
            Algeria's finest growers to distributors, retailers and food industries
            worldwide. Quality control, traceability and long-term partnership are
            at the core of every shipment we sign.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {[
              { k: "Quality first", v: "ISO-grade selection, HACCP processes and full traceability on every batch." },
              { k: "Global logistics", v: "Sea, air and overland freight to Europe, Africa, Gulf and North America." },
            ].map((it) => (
              <div key={it.k} className="border-l-2 border-leaf pl-5">
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
              src={tradeImg}
              alt="Global trade network"
              loading="lazy"
              width={1600}
              height={1200}
              className="size-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-deep-foreground">
              <div className="text-xs uppercase tracking-[0.3em] text-leaf">Worldwide presence</div>
              <div className="mt-3 font-display text-2xl font-bold">28 countries · 4 continents</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
