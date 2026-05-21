import { useTranslation } from "react-i18next";
import logo from "@/assets/rizcore-logo.png";

export function Footer() {
  const { t } = useTranslation();
  const links = [
    { href: "#about", key: "nav.about" },
    { href: "#africa", key: "nav.markets" },
    { href: "#services", key: "nav.services" },
    { href: "#products", key: "nav.products" },
    { href: "#contact", key: "nav.contact" },
  ];
  return (
    <footer className="bg-deep border-t border-white/10 text-deep-foreground/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RIZCORE" className="h-10 w-auto object-contain" />
          </div>
          <p className="mt-5 text-sm max-w-sm leading-relaxed">{t("footer.tagline")}</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-deep-foreground/50">{t("footer.explore")}</div>
          <ul className="mt-5 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-leaf transition-colors">{t(l.key)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-deep-foreground/50">{t("footer.contact")}</div>
          <ul className="mt-5 space-y-2 text-sm" dir="ltr">
            <li>Algiers, Algeria</li>
            <li>contact.rizcore@gmail.com</li>
            <li>+213 551 52 76 81</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap justify-between gap-3 text-xs text-deep-foreground/40">
          <span>© {new Date().getFullYear()} RIZCORE. {t("footer.rights")}</span>
          <span>{t("footer.line")}</span>
        </div>
      </div>
    </footer>
  );
}