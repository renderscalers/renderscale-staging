import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 hairline rounded-full px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground bg-background/60">
          <span className="h-1 w-1 rounded-full bg-sage" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
