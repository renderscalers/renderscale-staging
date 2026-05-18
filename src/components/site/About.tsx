import { motion } from "framer-motion";
import logo from "@/assets/renderscale-logo.png";

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 hairline rounded-full px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground bg-background/60">
            About RenderScale
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
            We combine design, engineering, and scalable systems to help businesses{" "}
            <span className="text-gradient-sage">grow digitally</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            RenderScale is a small, senior team of designers and engineers obsessed with the
            craft of digital products. We partner with founders and enterprises who care about
            the details — and the long term.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { v: "12+", l: "Industries" },
              { v: "60+", l: "Products shipped" },
              { v: "9yr", l: "Avg. team experience" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-semibold text-foreground">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-metal opacity-50 blur-2xl" />
          <div className="relative h-full w-full rounded-[2rem] hairline bg-card p-10 flex items-center justify-center shadow-elevated">
            <img src={logo} alt="RenderScale logo" className="h-full w-full object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
