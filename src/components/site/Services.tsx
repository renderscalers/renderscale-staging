import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  Palette,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import servicesCapabilities from "@/assets/services-capabilities.png";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive, and high-performance websites built to grow your business.",
    includes: ["Corporate websites", "Landing pages", "CMS integration", "SEO-ready structure", "Performance optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Intuitive and conversion-focused experiences designed for modern users.",
    includes: ["User research", "Wireframing", "Prototyping", "Design systems", "Mobile & web interfaces"],
  },
  {
    icon: Sparkles,
    title: "Branding & Identity",
    desc: "Strong visual identities that improve trust, recognition, and positioning.",
    includes: ["Logo design", "Brand guidelines", "Social media branding", "Marketing creatives", "Visual storytelling"],
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Solutions",
    desc: "Scalable ecommerce experiences optimized for growth and conversions.",
    includes: ["Online store setup", "Payment integration", "Product management", "Analytics integration", "Conversion optimization"],
  },
  {
    icon: Layers,
    title: "Product Engineering",
    desc: "Scalable digital products built with modern technologies and agile execution.",
    includes: ["MVP development", "SaaS platforms", "Dashboards & portals", "API integrations", "Cloud deployment"],
  },
  {
    icon: Zap,
    title: "AI & Automation",
    desc: "AI-powered systems that streamline operations and enhance customer experiences.",
    includes: ["AI chatbots", "Workflow automation", "Recommendation systems", "Data intelligence", "Conversational AI"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mx-auto block h-0.5 w-16 bg-sage" />
          <h2 className="mt-7 font-display text-4xl font-light leading-[1.15] tracking-normal text-muted-foreground md:text-5xl">
            A full stack of
            <span className="block font-light text-sage-deep">capabilities</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground/75 md:text-lg">
            From first sketch to enterprise rollout, one team brings design,
            engineering, growth, and automation into a single premium standard.
          </p>
        </motion.div>

        <div className="mt-14 grid items-center gap-y-12 lg:grid-cols-[minmax(220px,1fr)_minmax(420px,1.35fr)_minmax(220px,1fr)] lg:gap-x-10">
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {services.slice(0, 3).map((service, i) => (
              <CapabilityCallout key={service.title} {...service} delay={i * 0.08} />
            ))}
          </div>

          <DashboardPreview />

          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {services.slice(3).map((service, i) => (
              <CapabilityCallout key={service.title} {...service} delay={(i + 3) * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityCallout({
  icon: Icon,
  title,
  desc,
  includes,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  includes: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className="mx-auto max-w-sm text-center"
    >
      <Icon className="mx-auto h-11 w-11 stroke-[1.7] text-sage-deep" />
      <h3 className="mt-5 font-display text-xl font-light tracking-normal text-muted-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground/65">
        {desc}
      </p>
      {/* <div className="mt-4 text-left">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/75">
          Includes:
        </p>
        <ul className="mt-2 space-y-1.5">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs leading-5 text-muted-foreground/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage-deep" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div> */}
    </motion.div>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative mx-auto w-full max-w-3xl px-0 py-2 md:px-2 lg:-mx-10 lg:max-w-none"
    >
      <img
        src={servicesCapabilities}
        alt="Brand guidelines, mobile storefront, and dashboard interface preview"
        className="mx-auto block w-full object-contain"
        loading="lazy"
      />
    </motion.div>
  );
}
