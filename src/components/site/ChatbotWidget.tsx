import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  CalendarDays,
  ChevronDown,
  ExternalLink,
  Maximize2,
  Mic,
  Minus,
  Paperclip,
  Send,
  Smile,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const quickActions = [
  "Build a Website",
  "UI/UX Design",
  "Ecommerce Solutions",
  "Branding",
  "Product Engineering",
  "Pricing",
  "Book a Call",
  "Talk to Sales",
];

const suggestedPrompts = [
  "How fast can you launch an MVP?",
  "What is included in the Growth Package?",
  "Can you integrate AI into our workflow?",
];

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 w-[calc(100vw-2.5rem)] max-w-[420px] overflow-hidden rounded-[24px] border border-white/60 bg-white/78 shadow-[0_30px_90px_-32px_color-mix(in_oklab,var(--ink-deep)_48%,transparent)] backdrop-blur-2xl"
          >
            <div className="relative overflow-hidden bg-[linear-gradient(135deg,color-mix(in_oklab,var(--sage-soft)_74%,white),white_58%,color-mix(in_oklab,var(--inspinia-blue)_14%,white))]">
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sage/20 blur-3xl" />
              <div className="absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-[var(--inspinia-blue)]/10 blur-3xl" />

              <header className="relative flex items-center gap-3 border-b border-white/70 px-5 py-4">
                <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,var(--sage),color-mix(in_oklab,var(--inspinia-blue)_70%,var(--sage)))] text-white shadow-glow">
                  <Sparkles className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-sage" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-semibold tracking-normal text-foreground">
                    AI Assistant
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-sage shadow-[0_0_12px_var(--sage)]" />
                    Online now
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/70 hover:text-foreground" aria-label="Minimize assistant">
                    <Minus className="h-4 w-4" />
                  </button>
                  <button className="hidden h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/70 hover:text-foreground sm:grid" aria-label="Expand assistant">
                    <Maximize2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/70 hover:text-foreground"
                    aria-label="Close assistant"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </header>

              <div className="relative max-h-[62vh] overflow-y-auto px-5 py-5">
                <section className="rounded-[22px] border border-white/75 bg-white/64 p-4 shadow-inset">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-ink-deep text-white">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        Hi 👋 How can we help you today?
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Ask about services, pricing, timelines, UI/UX, development, or support.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="mt-4 flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action}
                      className="rounded-full border border-white/80 bg-white/70 px-3 py-2 text-xs font-medium text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:border-sage/50 hover:text-sage-deep"
                    >
                      {action}
                    </button>
                  ))}
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex items-end gap-2">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage-soft text-sage-deep">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="max-w-[280px] rounded-[20px] rounded-bl-md bg-white px-4 py-3 text-sm leading-6 text-foreground shadow-soft">
                        We can help you choose the right package, estimate delivery, or book a discovery call.
                      </div>
                      <span className="mt-1 block text-[10px] uppercase tracking-wider text-muted-foreground/70">
                        10:24 AM
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div>
                      <div className="max-w-[280px] rounded-[20px] rounded-br-md bg-ink-deep px-4 py-3 text-sm leading-6 text-white shadow-soft">
                        I need a website with ecommerce and strong UI/UX.
                      </div>
                      <span className="mt-1 block text-right text-[10px] uppercase tracking-wider text-muted-foreground/70">
                        Just now
                      </span>
                    </div>
                  </div>

                  <div className="flex items-end gap-2">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage-soft text-sage-deep">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="rounded-[20px] rounded-bl-md bg-white px-4 py-3 shadow-soft">
                      <div className="flex items-center gap-1.5">
                        <span className="chatbot-typing-dot" />
                        <span className="chatbot-typing-dot [animation-delay:140ms]" />
                        <span className="chatbot-typing-dot [animation-delay:280ms]" />
                      </div>
                    </div>
                  </div>
                </div>

                <section className="mt-5 rounded-[22px] border border-white/75 bg-white/62 p-4 shadow-soft">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-deep">
                    <Zap className="h-4 w-4" />
                    Smart recommendation
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    For ecommerce plus custom UI/UX, the Growth Package is usually the best starting point.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full bg-sage px-3 py-2 text-xs font-semibold text-white shadow-soft">
                      View Pricing
                    </a>
                    <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-foreground">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Book a Call
                    </a>
                  </div>
                </section>

                <section className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Suggested prompts
                  </p>
                  <div className="mt-2 grid gap-2">
                    {suggestedPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        className="flex items-center justify-between rounded-2xl border border-white/75 bg-white/58 px-3 py-2.5 text-left text-xs text-foreground shadow-soft transition-colors hover:border-sage/45"
                      >
                        {prompt}
                        <ChevronDown className="h-3.5 w-3.5 -rotate-90 text-sage-deep" />
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              <footer className="relative border-t border-white/75 bg-white/70 px-4 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-2 shadow-inset">
                  <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-sage-soft/60 hover:text-sage-deep" aria-label="Attach file">
                    <Paperclip className="h-4 w-4" />
                  </button>
                  <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-sage-soft/60 hover:text-sage-deep" aria-label="Choose emoji">
                    <Smile className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    placeholder="Ask anything…"
                    className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
                  />
                  <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-sage-soft/60 hover:text-sage-deep" aria-label="Voice input">
                    <Mic className="h-4 w-4" />
                  </button>
                  <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,var(--sage),color-mix(in_oklab,var(--inspinia-blue)_76%,var(--sage)))] text-white shadow-glow transition-transform hover:scale-105" aria-label="Send message">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-sage-deep" />
                  Powered by AI
                  <span className="text-muted-foreground/50">.</span>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sage-deep">
                    Human handoff <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="group relative flex justify-end">
        {!open && (
          <div className="pointer-events-none absolute bottom-full right-1 mb-3 rounded-full bg-ink-deep px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
            Need help?
          </div>
        )}
        <button
          onClick={() => setOpen((value) => !value)}
          className="group relative grid h-16 w-16 place-items-center rounded-full bg-[linear-gradient(135deg,var(--sage),color-mix(in_oklab,var(--inspinia-blue)_78%,var(--sage)))] text-white shadow-[0_18px_50px_-16px_color-mix(in_oklab,var(--sage)_70%,transparent)] transition-transform hover:scale-105 active:scale-95"
          aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        >
          <span className="absolute inset-0 rounded-full bg-sage/35 blur-xl transition-opacity group-hover:opacity-80 chatbot-pulse-glow" />
          <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full border-2 border-white bg-ink-deep px-1 text-[10px] font-semibold">
            1
          </span>
          <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/14 ring-1 ring-white/35 backdrop-blur">
            {open ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
          </span>
        </button>
      </div>
    </div>
  );
}
