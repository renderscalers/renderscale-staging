import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Section";

const tiers = [
  {
    name: "Starter Package",
    label: "Best for Startups",
    price: "Starting from ₹25,000",
    features: ["5-page responsive website", "Basic UI/UX design", "Mobile optimization", "Contact form integration", "Basic SEO setup", "2 weeks support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth Package",
    label: "Best for Growing Businesses",
    price: "Starting from ₹75,000",
    features: ["Custom website/app design", "Advanced UI/UX", "CMS integration", "Ecommerce capabilities", "Analytics setup", "SEO optimization", "1 month support"],
    cta: "Book Consultation",
    featured: true,
  },
  {
    name: "Enterprise Package",
    label: "Best for Enterprises & Scalable Products",
    price: "Custom Pricing",
    features: ["End-to-end product engineering", "AI integrations", "Dashboard development", "Cloud deployment", "Custom workflows", "Dedicated support", "Ongoing optimization"],
    cta: "Contact Sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Flexible Pricing for Every <span className="text-gradient-sage">Stage of Growth</span></>}
          description="Choose a plan that aligns with your business goals and digital transformation journey."
        />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                t.featured
                  ? "bg-foreground text-background shadow-elevated lg:scale-[1.03]"
                  : "bg-card hairline shadow-soft"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-sage-deep text-ivory px-3 py-1 text-[10px] font-medium uppercase tracking-wider shadow-soft">
                  <span className="h-1 w-1 rounded-full bg-ivory" />
                  Most popular
                </div>
              )}
              <div className={`text-xs uppercase tracking-widest ${t.featured ? "text-titanium-soft" : "text-muted-foreground"}`}>{t.label}</div>
              <h3 className={`mt-3 font-display text-2xl font-semibold ${t.featured ? "text-ivory" : "text-foreground"}`}>{t.name}</h3>
              <div className="mt-4">
                <div className="font-display text-3xl font-semibold leading-tight">{t.price}</div>
              </div>

              <ul className="mt-7 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.featured ? "bg-sage-soft/20 text-sage-soft" : "bg-sage/15 text-sage-deep"}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    <span className={t.featured ? "text-ivory" : "text-foreground/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                  t.featured
                    ? "bg-ivory text-ink shadow-soft"
                    : "bg-foreground text-background shadow-soft"
                }`}
              >
                {t.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
