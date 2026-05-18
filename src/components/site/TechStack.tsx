import { motion } from "framer-motion";
import { SectionHeading } from "./Section";

const stack = ["React","Next.js","Node.js","Python","Firebase","AWS","OpenAI","Tailwind CSS","Supabase","TypeScript","PostgreSQL","Vercel"];

export function TechStack() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technology"
          title={<>The <span className="text-gradient-sage">stack</span> we trust.</>}
          description="Modern, type-safe, and battle-tested across hundreds of deployments."
        />
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {stack.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="rounded-full hairline bg-card px-5 py-2.5 text-sm text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
