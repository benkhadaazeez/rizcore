import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";
import { AFRICA_COUNTRIES, AFRICA_CITIES, AFRICA_VIEWBOX, AFRICA_MOBILE_VIEWBOX } from "./africa-data";
const algiersImg = "/images/trade-algiers.png";

type Hub = {
  name: keyof typeof AFRICA_CITIES;
  country: string;
  status: "hq" | "active" | "upcoming";
  labelDx?: number;
  labelDy?: number;
  mobileLabelDx?: number;
  mobileLabelDy?: number;
  anchor?: "start" | "end" | "middle";
  mobileAnchor?: "start" | "end" | "middle";
};

const hubs: Hub[] = [
  // HQ
  { name: "Algiers", country: "", status: "hq", labelDx: 10, labelDy: -10, mobileLabelDx: 0, mobileLabelDy: -12, anchor: "start", mobileAnchor: "middle" },
  // Active
  { name: "Niamey", country: "", status: "active", labelDx: 0, labelDy: -10, mobileLabelDx: 0, mobileLabelDy: -14, anchor: "middle" },
  { name: "Abuja", country: "", status: "active", labelDx: 12, labelDy: 4, mobileLabelDx: 12, mobileLabelDy: 8, anchor: "start" },
  { name: "Ouagadougou", country: "", status: "active", labelDx: 6, labelDy: 16, mobileLabelDx: 8, mobileLabelDy: 18, anchor: "start" },
  { name: "Nouakchott", country: "", status: "active", labelDx: 10, labelDy: 4, mobileLabelDx: 12, mobileLabelDy: 4, anchor: "start" },
  // Upcoming
  { name: "Bamako", country: "", status: "upcoming", labelDx: -10, labelDy: -8, mobileLabelDx: -12, mobileLabelDy: -12, anchor: "end" },
  { name: "Conakry", country: "", status: "upcoming", labelDx: 10, labelDy: 4, mobileLabelDx: 10, mobileLabelDy: 12, anchor: "start" },
  { name: "Abidjan", country: "", status: "upcoming", labelDx: 0, labelDy: 16, mobileLabelDx: 0, mobileLabelDy: 18, anchor: "middle" },
  { name: "N'Djamena", country: "", status: "upcoming", labelDx: 12, labelDy: -6, mobileLabelDx: 12, mobileLabelDy: -8, anchor: "start" },
];

const ACTIVE_ISO = new Set(["NER", "NGA", "BFA", "MRT"]);
const UPCOMING_ISO = new Set(["CIV", "TCD", "GIN", "MLI"]);
const HQ_ISO = "DZA";

const algiers = AFRICA_CITIES["Algiers"];

export function AfricaMap() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section id="africa" className="relative bg-deep py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.42_0.18_256_/_0.18),transparent_70%)]" />

      {/* Cinematic Algiers strip */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-card mb-20 aspect-[21/9] sm:aspect-[21/8]">
          <img
            src={algiersImg}
            alt="Algerian flag over the Bay of Algiers and its commercial port"
            loading="lazy"
            width={1920}
            height={1280}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-8 lg:p-12 text-deep-foreground">
            <div className="text-[10px] uppercase tracking-[0.35em] text-leaf">
              {t("africa.eyebrow")}
            </div>
            <div className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold max-w-2xl leading-tight">
              {t("africa.gatewayCaption")}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-foreground leading-[1.05]">
            {t("africa.title1")} <span className="text-gradient-brand">{t("africa.titleAccent")}</span>
          </h2>
          <p className="mt-6 text-lg text-deep-foreground/70 leading-relaxed">
            {t("africa.body")}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-leaf/80">{t("africa.activeLabel")}</div>
              <ul className="mt-3 space-y-1.5 text-deep-foreground/90 text-sm">
                <li>Niger — Niamey</li>
                <li>Nigeria — Abuja</li>
                <li>Burkina Faso — Ouagadougou</li>
                <li>Mauritania — Nouakchott</li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-brand/80">{t("africa.upcomingLabel")}</div>
              <ul className="mt-3 space-y-1.5 text-deep-foreground/70 text-sm">
                <li>Côte d'Ivoire — Abidjan</li>
                <li>Chad — N'Djamena</li>
                <li>Guinea — Conakry</li>
                <li>Mali — Bamako</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-3 sm:p-6 overflow-hidden min-h-[320px]">
            <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(248,250,252,1)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,1)_1px,transparent_1px)] [background-size:40px_40px]" />
            <svg
              viewBox={isMobile ? AFRICA_MOBILE_VIEWBOX : AFRICA_VIEWBOX}
              preserveAspectRatio="xMidYMid meet"
              className="africa-map-svg relative block w-full h-auto min-h-[300px] sm:min-h-0"
              style={{ overflow: "visible", maxWidth: "100%", WebkitTransform: "translateZ(0)" }}
              role="img"
              aria-label="Africa export markets map"
            >
              <defs>
                <linearGradient id="mapBaseGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2f5f92" />
                  <stop offset="100%" stopColor="#1b3c60" />
                </linearGradient>
                <linearGradient id="mapActiveGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#8fe66e" />
                  <stop offset="100%" stopColor="#5fb23e" />
                </linearGradient>
                <linearGradient id="mapUpcomingGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3d82e0" />
                  <stop offset="100%" stopColor="#164f9e" />
                </linearGradient>
                <linearGradient id="mapHqGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#dbe6f0" />
                </linearGradient>
              </defs>
              <g opacity={0.96}>
                {AFRICA_COUNTRIES.map((c) => {
                  const isHq = c.iso === HQ_ISO;
                  const isActive = ACTIVE_ISO.has(c.iso);
                  const isUpcoming = UPCOMING_ISO.has(c.iso);
                  const countryClass = isHq
                    ? "country-hq"
                    : isActive
                    ? "country-active"
                    : isUpcoming
                    ? "country-upcoming"
                    : "country-base";
                  const countryFill = isHq
                    ? "url(#mapHqGrad)"
                    : isActive
                    ? "url(#mapActiveGrad)"
                    : isUpcoming
                    ? "url(#mapUpcomingGrad)"
                    : "url(#mapBaseGrad)";
                  return (
                    <path
                      key={c.iso}
                      d={c.d}
                      style={{ fill: countryFill }}
                      className={countryClass}
                      strokeWidth={isMobile ? 0.9 : 0.65}
                      vectorEffect="non-scaling-stroke"
                    >
                      <title>{c.name}</title>
                    </path>
                  );
                })}
              </g>

              {hubs.filter((h) => h.name !== "Algiers").map((h, i) => {
                const city = AFRICA_CITIES[h.name];
                const isActive = h.status === "active";
                const mx = (algiers.x + city.x) / 2 + (city.x - algiers.x) * 0.05;
                const my = (algiers.y + city.y) / 2 - 20;
                const d = `M${algiers.x},${algiers.y} Q${mx},${my} ${city.x},${city.y}`;
                return (
                  <g key={h.name}>
                    <path
                      d={d}
                      fill="none"
                      className={isActive ? "route-active" : "route-upcoming"}
                      strokeWidth={isActive ? 1.6 : 1.1}
                      strokeOpacity={isActive ? 0.35 : 0.35}
                      strokeDasharray={isActive ? "0" : "3 4"}
                      vectorEffect="non-scaling-stroke"
                    />
                    {isActive && (
                      <>
                        <path
                          d={d}
                          fill="none"
                          className="route-active route-flow"
                          strokeWidth={1.6}
                          strokeOpacity={0.9}
                          strokeLinecap="round"
                          vectorEffect="non-scaling-stroke"
                        />
                        <circle r={2.4} className="city-active">
                          <animateMotion dur="3.6s" repeatCount="indefinite" path={d} />
                        </circle>
                        <circle r={1.4} className="city-active" opacity={0.7}>
                          <animateMotion dur="3.6s" begin="1.2s" repeatCount="indefinite" path={d} />
                        </circle>
                      </>
                    )}
                  </g>
                );
              })}

              {hubs.map((h, i) => {
                const c = AFRICA_CITIES[h.name];
                const isHq = h.status === "hq";
                const isActive = h.status === "active";
                const cityClass = isHq ? "city-hq" : isActive ? "city-active" : "city-upcoming";
                const r = isHq ? 5 : isActive ? 4.2 : 3.4;
                const dx = isMobile ? h.mobileLabelDx ?? h.labelDx ?? 10 : h.labelDx ?? 10;
                const dy = isMobile ? h.mobileLabelDy ?? h.labelDy ?? 4 : h.labelDy ?? 4;
                const textAnchor = isMobile ? h.mobileAnchor ?? h.anchor ?? "start" : h.anchor ?? "start";
                return (
                  <g key={h.name}>
                    {isHq && (
                      <>
                        <circle cx={c.x} cy={c.y} r={r} className="city-hq pulse-ring" />
                        <circle cx={c.x} cy={c.y} r={r} className="city-hq pulse-ring delay-1" />
                        <circle cx={c.x} cy={c.y} r={r} className="city-hq pulse-ring delay-2" />
                      </>
                    )}
                    {isActive && (
                      <>
                        <circle cx={c.x} cy={c.y} r={r} className="city-active pulse-ring" />
                        <circle cx={c.x} cy={c.y} r={r} className="city-active pulse-ring delay-1" />
                      </>
                    )}
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={r}
                      className={cityClass}
                    />
                    {isHq && (
                      <circle cx={c.x} cy={c.y} r={r + 2} fill="none" className="city-hq" strokeWidth={1} opacity={0.9} />
                    )}
                    <text
                      x={c.x + dx}
                      y={c.y + dy}
                      className="city-label"
                      fontSize={isMobile ? (isHq ? 11 : isActive ? 9.5 : 9) : (isHq ? 12 : isActive ? 11 : 10)}
                      fontWeight={isHq || isActive ? 700 : 500}
                      textAnchor={textAnchor}
                      strokeWidth={isMobile ? 4.5 : 3.5}
                    >
                      {h.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="relative mt-5 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-deep-foreground/80">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5">
                <span className="size-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" /> {t("africa.legendHQ")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5">
                <span className="size-2 rounded-full bg-leaf shadow-[0_0_8px_rgba(120,217,87,0.9)]" /> {t("africa.legendActive")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5">
                <span className="size-2 rounded-full bg-brand shadow-[0_0_8px_rgba(31,104,206,0.9)]" /> {t("africa.legendUpcoming")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}