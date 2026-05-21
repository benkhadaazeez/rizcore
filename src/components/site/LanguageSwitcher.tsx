import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { Globe } from "lucide-react";
import { LANGS } from "@/i18n";

export function LanguageSwitcher({ variant = "navbar" }: { variant?: "navbar" | "drawer" }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === i18n.language) ?? LANGS[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function pick(code: string) {
    const lang = LANGS.find((l) => l.code === code)!;
    i18n.changeLanguage(code);
    window.localStorage.setItem("rz_lang", code);
    document.documentElement.lang = code;
    document.documentElement.dir = lang.dir;
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
        className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl px-3.5 h-10 text-xs uppercase tracking-[0.2em] text-deep-foreground hover:border-leaf/60 transition-colors ${
          variant === "drawer" ? "w-fit" : ""
        }`}
      >
        <Globe className="size-3.5 text-leaf" />
        <span className="font-medium">{current.label}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute end-0 mt-2 min-w-[170px] rounded-2xl border border-white/10 bg-deep/95 backdrop-blur-2xl shadow-card overflow-hidden z-50"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => pick(l.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-deep-foreground/80 hover:bg-white/[0.05] hover:text-deep-foreground transition-colors ${
                  l.code === current.code ? "bg-white/[0.04] text-deep-foreground" : ""
                }`}
              >
                <span className="text-base leading-none">{l.flag}</span>
                <span className="flex-1 text-start">{l.name}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-leaf">{l.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}