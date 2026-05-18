import { motion } from "framer-motion";

// Hub cities on the Africa SVG (coords in viewBox 0 0 500 600)
const hubs = [
  { name: "Algiers", x: 248, y: 60, primary: true },
  { name: "Casablanca", x: 175, y: 90 },
  { name: "Dakar", x: 95, y: 235 },
  { name: "Lagos", x: 240, y: 295 },
  { name: "Abidjan", x: 175, y: 290 },
  { name: "Nairobi", x: 365, y: 360 },
  { name: "Cairo", x: 320, y: 110 },
  { name: "Johannesburg", x: 320, y: 510 },
];

export function AfricaMap() {
  return (
    <section id="africa" className="relative bg-deep py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.42_0.18_256_/_0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
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
            Building Africa's<br />
            next <span className="text-gradient-brand">trade corridor</span>.
          </h2>
          <p className="mt-6 text-lg text-deep-foreground/70 leading-relaxed">
            Africa is the heart of our expansion strategy. From West to East,
            we are establishing distribution hubs to bring premium Algerian
            food products closer to growing consumer markets.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "12", v: "African countries" },
              { k: "8", v: "Logistics hubs" },
              { k: "2025", v: "Pan-African roll-out" },
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
          className="relative"
        >
          <svg viewBox="0 0 500 600" className="w-full h-auto">
            <defs>
              <linearGradient id="afrFill" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.42 0.18 256)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="oklch(0.22 0.08 252)" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Simplified Africa silhouette */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M230 30 L290 35 L340 55 L370 95 L395 130 L405 175 L395 215 L390 260 L405 310 L420 360 L405 405 L385 445 L355 485 L320 525 L285 555 L250 565 L215 555 L185 530 L160 490 L145 445 L130 400 L110 360 L95 320 L85 280 L80 240 L95 200 L115 165 L140 130 L165 95 L195 65 Z"
              fill="url(#afrFill)"
              stroke="oklch(0.55 0.18 230)"
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />

            {/* Trade route lines from Algiers */}
            {hubs.filter(h => !h.primary).map((h, i) => (
              <motion.line
                key={h.name}
                x1={248} y1={60} x2={h.x} y2={h.y}
                stroke="oklch(0.78 0.19 135)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.6 + i * 0.15 }}
              />
            ))}

            {/* Hub dots */}
            {hubs.map((h, i) => (
              <g key={h.name}>
                <motion.circle
                  cx={h.x} cy={h.y}
                  r={h.primary ? 8 : 5}
                  fill={h.primary ? "oklch(0.78 0.19 135)" : "oklch(0.55 0.18 230)"}
                  filter="url(#glow)"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                />
                {h.primary && (
                  <motion.circle
                    cx={h.x} cy={h.y}
                    r={8}
                    fill="none"
                    stroke="oklch(0.78 0.19 135)"
                    strokeWidth="1.5"
                    animate={{ r: [8, 22], opacity: [0.7, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                <motion.text
                  x={h.x + (h.primary ? 14 : 10)} y={h.y + 4}
                  fill="oklch(0.98 0.005 240)"
                  fontSize={h.primary ? 13 : 10}
                  fontWeight={h.primary ? 700 : 400}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: h.primary ? 1 : 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                >
                  {h.name}
                </motion.text>
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
