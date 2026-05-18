import { motion } from "framer-motion";
import { SectionHeading } from "./Section";

const items = [
  { q: "RenderScale shipped what would have taken our team a year — in three months.", a: "Maya Chen", r: "CTO, Northwind" },
  { q: "Their design system is the reason our product feels effortless.", a: "Jonas Albrecht", r: "Head of Product, Loom & Co." },
  { q: "Senior craft, zero ego. They feel like part of our team.", a: "Priya Raman", r: "Founder, Pulse Care" },
  { q: "The most thoughtful engineering partner we've ever worked with.", a: "Daniel Okafor", r: "VP Eng, Atlas" },
  { q: "Premium delivery from day one. The architecture has scaled effortlessly.", a: "Sara Lindqvist", r: "COO, Signal" },
];

export function Testimonials() {
  const loop = [...items, ...items];
  return (
    <section className="relative overflow-hidden bg-muted/40 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Trusted by teams that <span className="text-gradient-sage">care about craft</span>.</>}
        />
      </div>
      <div className="mt-6 relative">
        <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[var(--background)] to-transparent" />
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((t, i) => (
            <div key={i} className="shrink-0 w-[360px] rounded-2xl glass p-6 shadow-soft">
              <p className="font-display text-base text-foreground leading-relaxed">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-metal" />
                <div>
                  <div className="text-sm font-medium text-foreground">{t.a}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
