import { motion } from "framer-motion";
import { SectionHeading } from "./Section";

const steps = [
  { n: "01", t: "Discovery", d: "Map goals, users, and constraints." },
  { n: "02", t: "Strategy", d: "Roadmap, architecture, success metrics." },
  { n: "03", t: "Design", d: "Systemic UI on a scalable design system." },
  { n: "04", t: "Development", d: "Type-safe, tested, performance-first." },
  { n: "05", t: "Launch", d: "Zero-downtime deploys with telemetry." },
  { n: "06", t: "Scale", d: "Iterate with data, automate, and grow." },
];

export function Process() {
  return (
    <section id="process" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Process"
          title={<>A workflow built for <span className="text-gradient-sage">precision</span>.</>}
          description="Six tight phases, weekly visible progress, never a black box."
        />
        <div className="relative mt-6">
          <div aria-hidden className="absolute left-0 right-0 top-[1.6rem] h-px bg-gradient-to-r from-transparent via-sage/50 to-transparent hidden lg:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="relative text-center"
              >
                <div className="relative mx-auto h-12 w-12 rounded-full bg-card hairline grid place-items-center shadow-soft">
                  <span className="font-display text-xs font-semibold text-sage-deep">{s.n}</span>
                  <span aria-hidden className="absolute inset-0 rounded-full ring-1 ring-sage/20" />
                </div>
                <div className="mt-5 font-display text-base font-semibold text-foreground">{s.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
