import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, mv, to]);
  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { v: 28, s: "+", label: "Countries served" },
  { v: 150, s: "+", label: "B2B partners" },
  { v: 12000, s: "T", label: "Annual export volume" },
  { v: 99, s: "%", label: "On-time delivery" },
];

export function Stats() {
  return (
    <section className="relative bg-background py-24 lg:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center lg:text-left"
          >
            <div className="font-display text-5xl lg:text-7xl font-bold text-deep tracking-tight">
              <Counter to={s.v} suffix={s.s} />
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
