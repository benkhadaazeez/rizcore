import { motion } from "framer-motion";
import { AFRICA_COUNTRIES, AFRICA_CITIES, AFRICA_VIEWBOX } from "./africa-data";

type Hub = {
  name: keyof typeof AFRICA_CITIES;
  country: string;
  status: "hq" | "active" | "upcoming";
  labelDx?: number;
  labelDy?: number;
  anchor?: "start" | "end";
};

const hubs: Hub[] = [
  { name: "Algiers", country: "HQ · Algeria", status: "hq", labelDx: 12, labelDy: -8 },
  { name: "Niamey", country: "Niger", status: "active", labelDx: -10, labelDy: -10, anchor: "end" },
  { name: "Abuja", country: "Nigeria", status: "active", labelDx: 12, labelDy: 5 },
  { name: "Ouagadougou", country: "Burkina Faso", status: "upcoming", labelDx: -10, labelDy: -8, anchor: "end" },
  { name: "Abidjan", country: "Côte d'Ivoire", status: "upcoming", labelDx: -10, labelDy: 14, anchor: "end" },
  { name: "N'Djamena", country: "Chad", status: "upcoming", labelDx: 12, labelDy: -8 },
];

// Highlight countries on the map
const ACTIVE_ISO = new Set(["NER", "NGA"]);
const UPCOMING_ISO = new Set(["BFA", "CIV", "TCD"]);
const HQ_ISO = "DZA";

const algiers = AFRICA_CITIES["Algiers"];

export function AfricaMap() {
  return (
    <section id="africa" className="relative bg-deep py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.42_0.18_256_/_0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-leaf font-medium">
            04 — African Expansion
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-foreground leading-[1.05]">
            From Algiers to the<br />
            heart of <span className="text-gradient-brand">Africa</span>.
          </h2>
          <p className="mt-6 text-lg text-deep-foreground/70 leading-relaxed">
            Africa is our home market and our strategic priority. We are already
            shipping to Niger and Nigeria, and rolling out to Burkina Faso,
            Côte d'Ivoire and Chad — building a reliable Algerian supply line
            for the continent.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-leaf/80">Active markets</div>
              <ul className="mt-3 space-y-1.5 text-deep-foreground/90 text-sm">
                <li>Niger — Niamey</li>
                <li>Nigeria — Abuja</li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-brand/80">Upcoming expansion</div>
              <ul className="mt-3 space-y-1.5 text-deep-foreground/70 text-sm">
                <li>Burkina Faso — Ouagadougou</li>
                <li>Côte d'Ivoire — Abidjan</li>
                <li>Chad — N'Djamena</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "2", v: "Active markets" },
              { k: "3+", v: "Upcoming countries" },
              { k: "2025", v: "Activity started" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl lg:text-4xl font-bold text-leaf">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-deep-foreground/60">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-3 sm:p-6 overflow-hidden">
            <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(oklch(0.98_0.005_240)_1px,transparent_1px),linear-gradient(90deg,oklch(0.98_0.005_240)_1px,transparent_1px)] [background-size:40px_40px]" />
            <svg
              viewBox={AFRICA_VIEWBOX}
              className="relative w-full h-auto"
              style={{ overflow: "visible" }}
              role="img"
              aria-label="Africa export markets map"
            >
              <defs>
                <linearGradient id="afrBase" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.32 0.10 252)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="oklch(0.20 0.07 252)" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="afrActive" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.82 0.20 135)" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="oklch(0.62 0.18 140)" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="afrUpcoming" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.62 0.20 256)" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="oklch(0.42 0.18 256)" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="afrHq" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.98 0.005 240)" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="oklch(0.85 0.02 240)" stopOpacity="0.95" />
                </linearGradient>
                <filter id="afrGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Country shapes */}
              <g>
                {AFRICA_COUNTRIES.map((c, i) => {
                  const isHq = c.iso === HQ_ISO;
                  const isActive = ACTIVE_ISO.has(c.iso);
                  const isUpcoming = UPCOMING_ISO.has(c.iso);
                  const fill = isHq
                    ? "url(#afrHq)"
                    : isActive
                    ? "url(#afrActive)"
                    : isUpcoming
                    ? "url(#afrUpcoming)"
                    : "url(#afrBase)";
                  const stroke = isHq || isActive
                    ? "oklch(0.95 0.05 135)"
                    : isUpcoming
                    ? "oklch(0.78 0.16 256)"
                    : "oklch(0.55 0.10 230)";
                  const strokeOp = isHq || isActive || isUpcoming ? 0.65 : 0.28;
                  return (
                    <motion.path
                      key={c.iso}
                      d={c.d}
                      fill={fill}
                      stroke={stroke}
                      strokeOpacity={strokeOp}
                      strokeWidth={0.6}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + (i % 30) * 0.015 }}
                    >
                      <title>{c.name}</title>
                    </motion.path>
                  );
                })}
              </g>

              {/* Trade routes from Algiers */}
              {hubs.filter((h) => h.name !== "Algiers").map((h, i) => {
                const city = AFRICA_CITIES[h.name];
                const isActive = h.status === "active";
                // Curved path using quadratic bezier toward Algiers
                const mx = (algiers.x + city.x) / 2 + (city.x - algiers.x) * 0.05;
                const my = (algiers.y + city.y) / 2 - 20;
                const d = `M${algiers.x},${algiers.y} Q${mx},${my} ${city.x},${city.y}`;
                return (
                  <g key={h.name}>
                    <motion.path
                      d={d}
                      fill="none"
                      stroke={isActive ? "oklch(0.82 0.20 135)" : "oklch(0.70 0.16 256)"}
                      strokeWidth={isActive ? 1.4 : 1}
                      strokeOpacity={isActive ? 0.85 : 0.55}
                      strokeDasharray={isActive ? "0" : "3 3"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: isActive ? 0.85 : 0.55 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.7 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {isActive && (
                      <motion.circle
                        r={2.2}
                        fill="oklch(0.95 0.18 135)"
                        filter="url(#afrGlow)"
                      >
                        <animateMotion dur="3.6s" repeatCount="indefinite" path={d} />
                      </motion.circle>
                    )}
                  </g>
                );
              })}

              {/* Hub dots + labels */}
              {hubs.map((h, i) => {
                const c = AFRICA_CITIES[h.name];
                const isHq = h.status === "hq";
                const isActive = h.status === "active";
                const color = isHq
                  ? "oklch(0.98 0.005 240)"
                  : isActive
                  ? "oklch(0.82 0.20 135)"
                  : "oklch(0.70 0.16 256)";
                const r = isHq ? 5 : isActive ? 4.2 : 3.4;
                return (
                  <g key={h.name}>
                    {(isHq || isActive) && (
                      <motion.circle
                        cx={c.x}
                        cy={c.y}
                        r={r}
                        fill="none"
                        stroke={color}
                        strokeWidth={1.2}
                        animate={{ r: [r, r + 14], opacity: [0.7, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    )}
                    <motion.circle
                      cx={c.x}
                      cy={c.y}
                      r={r}
                      fill={color}
                      filter="url(#afrGlow)"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    />
                    {/* Label background pill for legibility */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1 + i * 0.08 }}
                    >
                      <text
                        x={c.x + (h.labelDx ?? 10)}
                        y={c.y + (h.labelDy ?? 4)}
                        fill="oklch(0.98 0.005 240)"
                        fontSize={isHq ? 11 : isActive ? 10 : 9}
                        fontWeight={isHq || isActive ? 700 : 500}
                        textAnchor={h.anchor ?? "start"}
                        style={{ paintOrder: "stroke", stroke: "oklch(0.16 0.07 252)", strokeWidth: 3, strokeLinejoin: "round" }}
                      >
                        {h.name}
                      </text>
                      <text
                        x={c.x + (h.labelDx ?? 10)}
                        y={c.y + (h.labelDy ?? 4) + 9}
                        fill={color}
                        fontSize={7}
                        fontWeight={600}
                        letterSpacing="1.2"
                        textAnchor={h.anchor ?? "start"}
                        style={{ textTransform: "uppercase", paintOrder: "stroke", stroke: "oklch(0.16 0.07 252)", strokeWidth: 2.5, strokeLinejoin: "round" }}
                      >
                        {h.country}
                      </text>
                    </motion.g>
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.25em] text-deep-foreground/70">
              <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-white" /> HQ</span>
              <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-leaf" /> Active</span>
              <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-brand" /> Upcoming</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
