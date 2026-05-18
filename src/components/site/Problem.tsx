import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, Brush, Workflow, Frown, ArrowRight } from "lucide-react";
import { SectionHeading } from "./Section";

const pains = [
  { icon: AlertTriangle, t: "Outdated websites", d: "Slow, dated experiences that lose trust on first impression." },
  { icon: TrendingDown, t: "Poor conversions", d: "Beautiful pages that fail to turn visitors into customers." },
  { icon: Clock, t: "Slow development", d: "Months wasted on features that should ship in weeks." },
  { icon: Brush, t: "Weak branding", d: "Inconsistent identity that erodes premium positioning." },
  { icon: Workflow, t: "No automation", d: "Manual ops that don't scale past your first hires." },
  { icon: Frown, t: "Bad UX", d: "Confusing flows that frustrate users and drive them away." },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-20">
      <div aria-hidden className="absolute inset-0 dot-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The Problem"
          title={<>Most businesses struggle to <span className="text-gradient-sage">scale digitally</span>.</>}
          description="Growth stalls when product, design, and engineering aren't aligned. Here's what we see every day."
        />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl hairline bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.04] text-foreground/70 group-hover:text-sage-deep group-hover:bg-sage/10 transition-colors">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-foreground text-background px-5 py-2.5 text-sm shadow-elevated">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-soft animate-pulse" />
            RenderScale solves this — end to end.
            <ArrowRight className="h-4 w-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
