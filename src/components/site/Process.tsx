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
    <section id="process" className="relative py-14" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Process"
          title={<>A workflow built for <span className="text-gradient-sage">precision</span>.</>}
          description="Six tight phases, weekly visible progress, never a black box."
        />
        <div className="relative mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mt-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="relative text-center"
            >
              {/* Circle + Connector */}
              <div className="relative flex items-center justify-center mb-6">
                <div
                  className="relative z-10 h-12 w-12 rounded-full bg-white border flex items-center justify-center"
                  style={{
                    borderColor: "oklch(0.68 0.12 168)",
                  }}
                >
                  <span className="font-display text-xs font-semibold text-sage-deep">
                    {s.n}
                  </span>
                </div>

                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute left-1/2 top-1/2 h-[2px] -translate-y-1/2"
                    style={{
                      width: "calc(100% - 24px)",
                      marginLeft: "24px",
                      backgroundColor: "oklch(0.68 0.12 168)",
                    }}
                  />
                )}
              </div>

              <h3 className="font-display text-base font-semibold text-foreground">
                {s.t}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.d}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
