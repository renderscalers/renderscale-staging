import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/renderscale-logo.png";

const links = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the active section
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav
        style={{
          backgroundColor: scrolled ? "var(--ivory)" : "transparent",
          borderColor: scrolled
            ? "color-mix(in oklab, var(--ink) 10%, transparent)"
            : "transparent",
          boxShadow: scrolled
            ? "0 8px 30px -14px color-mix(in oklab, var(--ink-deep) 30%, transparent)"
            : "none",
          transitionProperty:
            "background-color, border-color, box-shadow, padding, color",
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className={`w-full border-b flex items-center gap-6 px-5 md:px-10 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <span
            className={`grid place-items-center transition-all duration-500 ${
              scrolled ? "h-16 w-16 md:h-20 md:w-20" : "h-20 w-20 md:h-24 md:w-24"
            }`}
          >
            <img
              src={logo}
              alt="RenderScale"
              className={`object-contain transition-all duration-500 ${
                scrolled
                  ? "h-14 w-14 md:h-18 md:w-18"
                  : "h-18 w-18 md:h-22 md:w-22 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
              } max-h-full max-w-full`}
            />
          </span>
          <span
            className={`font-display font-semibold tracking-tight hidden sm:block transition-all duration-500 ${
              scrolled
                ? "text-lg md:text-xl text-ink"
                : "text-xl md:text-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
            }`}
          >
            RenderScale
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 mx-auto text-sm">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    scrolled
                      ? isActive
                        ? "text-white bg-sage shadow-soft"
                        : "text-ink/70 hover:text-ink hover:bg-ink/5"
                      : isActive
                        ? "text-white bg-white/20 backdrop-blur-sm ring-1 ring-white/30"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className={`hidden md:inline-flex shrink-0 items-center gap-1.5 rounded-full text-sm font-medium transition-all duration-500 hover:scale-[1.03] whitespace-nowrap leading-none px-5 py-2.5 ${
            scrolled
              ? "bg-sage text-white shadow-glow"
              : "bg-white text-ink shadow-elevated"
          }`}
        >
          Book a Call <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ml-auto h-10 w-10 rounded-full grid place-items-center transition-colors duration-300 ${
            scrolled
              ? "bg-ink/5 text-ink hover:bg-ink/10"
              : "bg-white/15 text-white border border-white/25 backdrop-blur"
          }`}
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-full left-4 right-4 mt-2 glass rounded-2xl p-4 md:hidden shadow-elevated">
          <ul className="flex flex-col">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-sage text-white"
                        : "hover:bg-foreground/5"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-sage text-white py-2.5 text-sm font-medium"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
