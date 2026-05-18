import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Rocket, Layers3, BrainCircuit, Search, Smartphone, Sprout } from "lucide-react";
import { SectionHeading } from "./Section";

const metrics = [
  { icon: Sprout, label: "Projects Delivered", value: 150, suffix: "+" },
  { icon: Rocket, label: "Client Satisfaction", value: 98, suffix: "%" },
  { icon: Layers3, label: "Faster Launch", value: 2.5, suffix: "x" },
  { icon: BrainCircuit, label: "AI-Ready Systems", value: 100, suffix: "%" },
  { icon: Search, label: "SEO Score", value: 98, suffix: "/100" },
  { icon: Smartphone, label: "Mobile-First Builds", value: 100, suffix: "%" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => (to % 1 === 0 ? Math.round(v).toString() : v.toFixed(1)));
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
  }, [inView, mv, to]);
  return (
    <span className="font-display text-5xl md:text-6xl font-semibold text-foreground tracking-tight">
      <motion.span ref={ref}>{rounded}</motion.span>
      <span className="text-gradient-sage">{suffix}</span>
    </span>
  );
}

export function WhyUs() {
  return (
    <section className="relative py-32 bg-muted/40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why RenderScale"
          title={<>Built for performance <span className="text-gradient-sage">& scale</span>.</>}
          description="Precision engineering, structured delivery, and a design language that lasts."
        />
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl hairline bg-card p-7 shadow-soft hover:shadow-elevated transition-shadow"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sage/12 text-sage-deep">
                <m.icon className="h-5 w-5" />
              </div>
              <div className="mt-7"><Counter to={m.value} suffix={m.suffix} /></div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
