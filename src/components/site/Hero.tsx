import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import hero3 from "../../assets/hero-3.png";

const ease = [0.22, 1, 0.36, 1] as const;

const showcases = [
  {
    title: "Building Digital Experiences That Perform",
    tag: "Engineering",
    img: hero1,
  },
  {
    title: "Turning Ideas into Visual Experiences",
    tag: "Design",
    img: hero2,
  },
  {
    title: "Smarter Commerce Starts Here",
    tag: "Commerce",
    img: hero3,
  },
];

export function Hero() {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));

  return (
    <section id="top" className="relative w-full overflow-hidden bg-ink-deep">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {showcases.map((s, idx) => (
            <CarouselItem key={s.title} className="pl-0 basis-full">
              <div className="relative w-full h-[70vh] min-h-[460px] max-h-[640px]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Dark overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/80 via-ink-deep/55 to-ink-deep/85" />
                <div aria-hidden className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

                {/* Text content */}
                <div className="relative z-10 flex h-full items-center">
                  <div className="mx-auto max-w-5xl px-6 text-center pt-24">
                    <motion.div
                      key={`badge-${idx}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease }}
                      className="inline-flex items-center gap-2 rounded-full pl-1.5 pr-3 py-1 text-xs text-white/80 bg-white/10 backdrop-blur border border-white/15"
                    >
                      <span className="inline-flex items-center gap-1 rounded-full bg-sage text-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">
                        <Sparkles className="h-3 w-3" /> {s.tag}
                      </span>
                      <span>AI-native engineering studio · 2026</span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease, delay: 0.1 }}
                      className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.02]"
                    >
                      {s.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.75, ease, delay: 0.2 }}
                      className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-white/80 leading-relaxed"
                    >
                      We build scalable websites, SaaS platforms, AI systems,
                      dashboards, and modern digital experiences engineered
                      for growth.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease, delay: 0.3 }}
                      className="mt-9 flex items-center justify-center gap-3 flex-wrap"
                    >
                      <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-sage text-white px-6 py-3.5 text-sm font-medium shadow-elevated transition-transform hover:scale-[1.03]"
                      >
                        Start Your Project
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                      <a
                        href="#work"
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
                      >
                        <Play className="h-3.5 w-3.5" /> View Portfolio
                      </a>
                    </motion.div>

                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
