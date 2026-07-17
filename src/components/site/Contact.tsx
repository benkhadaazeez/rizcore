import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = inquirySchema.safeParse({
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      country: String(fd.get("country") || ""),
      message: String(fd.get("msg") || ""),
      website: String(fd.get("website") || ""),
    });
    if (!parsed.success) {
      setStatus("error");
      setErrorMsg(parsed.error.issues[0]?.message ?? "Please check your inputs.");
      return;
    }
    if (parsed.data.website) {
      // silent success for bots
      setStatus("sent");
      form.reset();
      return;
    }
    const d = parsed.data;
    const subject = `New inquiry from ${d.name}${d.company ? ` — ${d.company}` : ""}`;
    const body =
      `Name: ${d.name}\n` +
      `Company: ${d.company || "—"}\n` +
      `Email: ${d.email}\n` +
      `Country: ${d.country || "—"}\n\n` +
      `Message:\n${d.message}\n`;
    const mailto = `mailto:contact@rizcore.dz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("sent");
    setErrorMsg("");
    form.reset();
  };

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
              { Icon: Mail, k: t("contact.desk"), v: "contact@rizcore.dz" },
              { Icon: Phone, k: t("contact.phone"), v: "+213 551 52 76 81" },
              { Icon: Clock, k: t("contact.hours"), v: t("contact.hoursValue") },
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
          onSubmit={handleSubmit}
          noValidate
          className="relative rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 lg:p-10 shadow-glow"
        >
          <div className="grid gap-5">
            {[
              { id: "name", label: t("contact.fName"), type: "text", required: true },
              { id: "company", label: t("contact.fCompany"), type: "text", required: false },
              { id: "email", label: t("contact.fEmail"), type: "email", required: true },
              { id: "country", label: t("contact.fCountry"), type: "text", required: false },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="text-xs uppercase tracking-[0.25em] text-deep-foreground/60">
                  {f.label}{f.required ? " *" : ""}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required={f.required}
                  maxLength={255}
                  autoComplete={f.id === "email" ? "email" : f.id === "name" ? "name" : "off"}
                  className="mt-2 w-full bg-transparent border-b border-white/15 text-deep-foreground py-3 focus:outline-none focus:border-leaf transition-colors"
                />
              </div>
            ))}
            <div>
              <label htmlFor="msg" className="text-xs uppercase tracking-[0.25em] text-deep-foreground/60">
                {t("contact.fMsg")} *
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={3}
                required
                maxLength={2000}
                className="mt-2 w-full bg-transparent border-b border-white/15 text-deep-foreground py-3 focus:outline-none focus:border-leaf transition-colors resize-none"
              />
            </div>

            {/* Honeypot: hidden from users */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            {status === "sent" && (
              <div className="rounded-lg border border-leaf/30 bg-leaf/10 px-4 py-3 text-sm text-deep-foreground/90">
                Thank you — your inquiry has been prepared and sent to contact@rizcore.dz. Our team will reply shortly.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-deep-foreground/90">
                {errorMsg}
              </div>
            )}

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