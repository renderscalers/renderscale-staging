import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Section";

const projects = [
  { tag: "SaaS Platform", title: "Northwind Studio", desc: "Multi-tenant analytics workspace with realtime collab.", span: "lg:col-span-2 lg:row-span-2", accent: "from-sage/30 via-sage/10 to-titanium/30" },
  { tag: "AI Product", title: "Atlas Copilot", desc: "Conversational research agent for enterprise teams.", span: "", accent: "from-titanium/40 to-sage/15" },
  { tag: "Healthcare", title: "Pulse Care", desc: "Patient intake & triage dashboard.", span: "", accent: "from-sage-soft/60 to-ivory-deep" },
  { tag: "Government", title: "Civic Insights", desc: "Public data dashboards at city scale.", span: "lg:col-span-2", accent: "from-titanium-soft to-sage/25" },
  { tag: "E-commerce", title: "Loom & Co.", desc: "Headless commerce for premium fashion.", span: "", accent: "from-sage/20 to-titanium/30" },
  { tag: "Analytics", title: "Signal", desc: "BI-grade reporting with no-code charts.", span: "", accent: "from-titanium/30 to-sage-soft/60" },
];

export function Work() {
  return (
    <section id="work" className="relative bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title={<>Selected <span className="text-gradient-sage">case studies</span>.</>}
          description="A glimpse into products we've engineered across industries."
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px] gap-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-3xl hairline bg-card overflow-hidden shadow-soft hover:shadow-elevated transition-shadow ${p.span}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
              <div className="absolute inset-5 md:inset-6 rounded-2xl bg-background/80 backdrop-blur-sm hairline p-4 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.01]">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-sage/50" />
                  <span className="h-2 w-2 rounded-full bg-titanium" />
                  <span className="h-2 w-2 rounded-full bg-titanium-soft" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="h-10 rounded-md bg-muted" />
                  <div className="h-10 rounded-md bg-muted" />
                  <div className="h-10 rounded-md bg-sage/20" />
                </div>
                <div className="mt-2 h-14 rounded-md bg-muted" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-muted" />
                <div className="mt-1.5 h-2 w-1/2 rounded-full bg-muted" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-6 md:p-7">
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink/70 font-medium">{p.tag}</div>
                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-foreground leading-tight">{p.title}</h3>
                  <span className="h-9 w-9 grid place-items-center rounded-full bg-foreground text-background shadow-soft transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-ink/75 max-w-xs">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
