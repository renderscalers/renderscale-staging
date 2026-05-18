import { Send, Globe, AtSign, ArrowUpRight } from "lucide-react";
const Twitter = Send, Linkedin = Globe, Github = AtSign;
import logo from "@/assets/renderscale-logo.png";

const cols = [
  { title: "Studio", links: ["Services","Work","Process","About","Contact"] },
  { title: "Services", links: ["Websites","SaaS Platforms","AI Integrations","Dashboards","Branding"] },
  { title: "Resources", links: ["Pricing","FAQ","Case Studies","Careers"] },
];

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.18_0.008_130)] text-[var(--ivory)] overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-[0.05]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="RenderScale" className="h-10 w-10 object-contain" />
              <div>
                <div className="font-display text-lg font-semibold">RenderScale</div>
                <div className="text-xs text-[var(--titanium-soft)]">Scaling Ideas Digitally</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-[var(--titanium-soft)] leading-relaxed">
              A premium digital engineering studio building scalable products
              for ambitious founders and enterprise teams.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory text-ink px-5 py-2.5 text-sm font-medium hover:scale-[1.03] transition-transform">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="mt-8 flex gap-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full border border-white/10 grid place-items-center hover:bg-white/5 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-xs uppercase tracking-widest text-[var(--titanium)]">{c.title}</div>
              <ul className="mt-5 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-[var(--titanium-soft)] hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <div className="text-xs uppercase tracking-widest text-[var(--titanium)]">Contact</div>
            <ul className="mt-5 space-y-2.5 text-sm text-[var(--titanium-soft)]">
              <li>hello@renderscale.com</li>
              <li>Remote · Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--titanium)]">
          <div>© {new Date().getFullYear()} RenderScale. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
