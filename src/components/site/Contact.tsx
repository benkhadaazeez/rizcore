import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="relative bg-deep py-32 lg:py-40 overflow-hidden grain">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.42_0.18_256_/_0.35),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-leaf font-medium">
            {t("contact.eyebrow")}
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-foreground leading-[1.05]">
            {t("contact.title1")}<br />
            <span className="text-gradient-brand">{t("contact.titleAccent")}</span> {t("contact.title2")}
          </h2>
          <p className="mt-6 text-lg text-deep-foreground/70 max-w-lg">
            {t("contact.body")}
          </p>

          <div className="mt-12 space-y-6">
            {[
              { Icon: MapPin, k: t("contact.hq"), v: "Algiers, Algeria" },
              { Icon: Mail, k: t("contact.desk"), v: "contact.rizcore@gmail.com" },
              { Icon: Phone, k: t("contact.phone"), v: "+213 551 52 76 81" },
            ].map(({ Icon, k, v }) => (
              <div key={k} className="flex items-start gap-4">
                <div className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-leaf shrink-0">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-deep-foreground/50">{k}</div>
                  <div className="mt-1 text-deep-foreground font-medium" dir="ltr">{v}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
          className="relative rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 lg:p-10 shadow-glow"
        >
          <div className="grid gap-5">
            {[
              { id: "name", label: t("contact.fName"), type: "text" },
              { id: "company", label: t("contact.fCompany"), type: "text" },
              { id: "email", label: t("contact.fEmail"), type: "email" },
              { id: "country", label: t("contact.fCountry"), type: "text" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="text-xs uppercase tracking-[0.25em] text-deep-foreground/60">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  className="mt-2 w-full bg-transparent border-b border-white/15 text-deep-foreground py-3 focus:outline-none focus:border-leaf transition-colors"
                />
              </div>
            ))}
            <div>
              <label htmlFor="msg" className="text-xs uppercase tracking-[0.25em] text-deep-foreground/60">
                {t("contact.fMsg")}
              </label>
              <textarea
                id="msg"
                rows={3}
                className="mt-2 w-full bg-transparent border-b border-white/15 text-deep-foreground py-3 focus:outline-none focus:border-leaf transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white text-deep px-7 py-4 font-medium hover:bg-leaf transition-all"
            >
              {t("contact.send")}
              <span>→</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}