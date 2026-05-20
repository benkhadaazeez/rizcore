import { motion } from "framer-motion";
import { Ship, Package, ShieldCheck, Globe2, Factory, FileCheck2 } from "lucide-react";

const services = [
  { icon: Ship, title: "Africa shipping", desc: "Maritime and overland freight optimized for West and Central African routes." },
  { icon: Package, title: "Algerian sourcing", desc: "Direct relationships with trusted Algerian producers and cooperatives." },
  { icon: ShieldCheck, title: "Quality control", desc: "On-site inspection, lab analysis and HACCP-compliant processes." },
  { icon: Globe2, title: "African market access", desc: "Distribution partners across our active and upcoming African markets." },
  { icon: Factory, title: "Private label", desc: "Turnkey programs: formulation, packaging, branding and shipment." },
  { icon: FileCheck2, title: "Documentation", desc: "Customs, certifications, halal, organic — handled entirely by our team." },
];

export function Services() {
  return (
    <section id="services" className="relative bg-deep py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.18_256_/_0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-leaf font-medium">
            02 — Services
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-foreground leading-[1.05]">
            Export solutions, <span className="text-gradient-brand">end to end</span>.
          </h2>
          <p className="mt-6 text-lg text-deep-foreground/70">
            From the orchard to the shelf — we engineer reliable, compliant and
            premium-grade export operations.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group bg-deep p-8 lg:p-10 hover:bg-deep/60 transition-colors"
            >
              <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-leaf group-hover:bg-leaf group-hover:text-deep transition-all">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-deep-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-deep-foreground/60 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
