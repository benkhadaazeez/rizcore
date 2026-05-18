import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/rizcore-logo.jpeg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#africa", label: "Africa" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
          <div className="size-10 rounded-lg overflow-hidden bg-white ring-1 ring-white/20 shadow-glow">
            <img src={logo} alt="RIZCORE" className="size-full object-cover" />
          </div>
          <span className="font-display font-bold tracking-tight text-deep-foreground text-lg">
            RIZCORE
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-deep-foreground/70 hover:text-deep-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-leaf transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-deep px-5 py-2.5 text-sm font-medium hover:bg-leaf hover:text-deep transition-colors"
        >
          Get a quote
          <span className="text-base leading-none">→</span>
        </a>
      </div>
    </motion.header>
  );
}
