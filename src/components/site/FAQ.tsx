import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./Section";

const faqs = [
  { q: "What's a typical project timeline?", a: "Marketing sites ship in 3–5 weeks. SaaS products run 8–16 weeks depending on scope. We share weekly milestones from day one." },
  { q: "How does pricing work?", a: "Fixed scope, fixed price for defined engagements. Long-term partnerships are billed per sprint or month, with full transparency." },
  { q: "Which technologies do you use?", a: "TypeScript, React, Next.js, TanStack, Node, Python, Postgres, Supabase, Vercel, AWS, and modern AI APIs (OpenAI, Anthropic, etc.)." },
  { q: "Do you offer ongoing support?", a: "Yes. Every project includes a post-launch period, and most clients continue with us on a monthly retainer for iteration and growth." },
  { q: "How are revisions handled?", a: "Each phase has dedicated review rounds. We work in tight feedback loops so you never wait weeks to see direction shifts." },
  { q: "Do you maintain what you build?", a: "We do — uptime monitoring, performance audits, dependency upgrades, and roadmap iteration are all available as care plans." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-muted/40 py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient-sage">answered</span>.</>}
          description="Everything you might want to know before reaching out."
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 rounded-3xl hairline bg-card shadow-soft p-2 md:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-b-0 px-4">
                <AccordionTrigger className="py-5 text-left font-display text-base md:text-lg font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-5 pr-8">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
