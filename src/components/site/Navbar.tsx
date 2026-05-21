import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/rizcore-logo.png";
import { LanguageSwitcher } from "./LanguageSwitcher";

const linkKeys = [
  { href: "#top", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#africa", key: "nav.markets" },
  { href: "#services", key: "nav.services" },
  { href: "#products", key: "nav.products" },
  { href: "#contact", key: "nav.contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-deep/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="RIZCORE"
            className="h-9 lg:h-10 w-auto object-contain drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition-transform group-hover:scale-[1.03]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {linkKeys.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-deep-foreground/70 hover:text-deep-foreground transition-colors relative group"
            >
              {t(l.key)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-leaf transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white text-deep px-5 py-2.5 text-sm font-medium hover:bg-leaf hover:text-deep transition-colors"
          >
            {t("nav.cta")}
            <span className="text-base leading-none">→</span>
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl text-deep-foreground"
          >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }}>
                <X className="size-5" />
              </motion.span>
            ) : (
              <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.25 }}>
                <Menu className="size-5" />
              </motion.span>
            )}
          </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.header>

    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 lg:hidden bg-deep/95 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.42_0.18_256/0.35),transparent_60%)]" />
          <nav className="relative h-full flex flex-col justify-center px-8 gap-2">
            {linkKeys.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-baseline gap-4 py-3 border-b border-white/10"
              >
                <span className="text-xs font-mono text-leaf/70">0{i + 1}</span>
                <span className="font-display text-3xl sm:text-4xl font-bold text-deep-foreground group-hover:text-leaf transition-colors">
                  {t(l.key)}
                </span>
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-10 text-xs uppercase tracking-[0.3em] text-deep-foreground/60"
            >
              Algiers · Algeria
              <div className="mt-1 text-deep-foreground/80 normal-case tracking-normal text-sm">contact.rizcore@gmail.com</div>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
