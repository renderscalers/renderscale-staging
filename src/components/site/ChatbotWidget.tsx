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

// const [selectedAction, setSelectedAction] = useState<string | null>(null);
// const [websiteStep, setWebsiteStep] = useState(0);
// const [activeOption, setActiveOption] = useState<string | null>(null);

// const [leadData, setLeadData] = useState({
//   name: "",
//   email: "",
//   budget: "",
//   timeline: "",
// });

const websiteFlow = [
  {
    question:
      "Great! We'd love to help. What type of website are you looking to build?",
    options: [
      "Corporate Website",
      "Startup Website",
      "SaaS Product",
      "Portfolio Website",
      "Landing Page",
      "Other",
    ],
  },
  {
    question: "Do you already have designs?",
    options: ["Yes", "No", "Need Design Support"],
  },
  {
    question: "How many pages do you need?",
    options: ["1-5 Pages", "5-10 Pages", "10-20 Pages", "20+"],
  },
  {
    question: "Any preferred technology?",
    options: [
      "React",
      "Next.js",
      "WordPress",
      "Shopify",
      "No Preference",
    ],
  },
  {
    question: "Expected timeline?",
    options: [
      "1-2 Weeks",
      "1 Month",
      "2-3 Months",
      "Flexible",
    ],
  },
];

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi 👋 How can we help you today?",
    },
  ]);

  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [websiteStep, setWebsiteStep] = useState(0);
  const [activeOption, setActiveOption] = useState<string | null>(null);

  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    budget: "",
    timeline: "",
  });

const actionResponses: Record<string, string> = {
  "Build a Website":
    "We build responsive, high-performance websites tailored for startups and enterprises with modern UI/UX.",

  "UI/UX Design":
    "Our UI/UX process includes wireframing, research, prototypes, and conversion-focused interface design.",

  "Ecommerce Solutions":
    "We develop scalable ecommerce platforms with payment gateway integration, inventory management, and optimized checkout flows.",

  Branding:
    "We help brands create strong visual identity including logos, design systems, and digital presence.",

  "Product Engineering":
    "We build scalable SaaS, enterprise, cloud-native, and AI-powered applications.",

  Pricing:
    "We offer Starter, Growth, and Enterprise packages based on your requirements and project scope.",

  "Book a Call":
    "You can schedule a discovery call with our team to discuss timelines, requirements, and goals.",

  "Talk to Sales":
    "Our sales team can help you with proposals, onboarding, enterprise plans, and support.",

  "How fast can you launch an MVP?":
    "Most MVPs can be launched within 2–6 weeks depending on scope and integrations.",

  "What is included in the Growth Package?":
    "The Growth Package includes UI/UX, frontend + backend development, integrations, testing, and deployment support.",

  "Can you integrate AI into our workflow?":
    "Yes — we build AI-powered workflows, automation systems, AI agents, analytics dashboards, and chatbots.",
};

const handleQuickAction = (action: string) => {
  if (action === "Build a Website") {
    setSelectedAction(action);

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: action,
      },
      {
        type: "bot",
        text: websiteFlow[0].question,
      },
    ]);

    return;
  }

  setMessages((prev) => [
    ...prev,
    {
      type: "user",
      text: action,
    },
    {
      type: "bot",
      text: actionResponses[action],
    },
  ]);
};

const handleWebsiteFlow = (answer: string) => {
  setActiveOption(answer);

  const nextStep = websiteStep + 1;

  const updatedMessages = [
    ...messages,
    {
      type: "user",
      text: answer,
    },
  ];

  if (nextStep < websiteFlow.length) {
    updatedMessages.push({
      type: "bot",
      text: websiteFlow[nextStep].question,
    });

    setMessages(updatedMessages);
    setWebsiteStep(nextStep);
  } else {
    updatedMessages.push({
      type: "bot",
      text:
        "Perfect! Please share your Name, Email, Budget and Timeline below.",
    });

    updatedMessages.push({
      type: "bot",
      text:
        "Would you like to schedule a free consultation with our experts?",
    });

    setMessages(updatedMessages);
    setWebsiteStep(nextStep);
  }
};

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
            <header className="relative flex items-center gap-3 border-b border-white/70 px-5 py-4">
              <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,var(--sage),color-mix(in_oklab,var(--inspinia-blue)_70%,var(--sage)))] shadow-glow">
                <Sparkles className="h-5 w-5" />
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
                <button
                  className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/70 hover:text-foreground"
                  aria-label="Minimize assistant"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <button
                  className="hidden h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/70 hover:text-foreground sm:grid"
                  aria-label="Expand assistant"
                >
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
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => handleQuickAction(action)}
                    className="rounded-full border border-white/80 bg-white/70 px-3 py-2 text-xs font-medium text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:border-sage/50 hover:text-sage-deep"
                  >
                    {action}
                  </button>
                ))}
              </div>

              <div className="mt-5 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.type === "user"
                          ? "justify-end"
                          : "items-end gap-2"
                      }`}
                    >
                      {message.type === "bot" && (
                        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage-soft text-sage-deep">
                          <Bot className="h-4 w-4" />
                        </div>
                      )}

                      <div>
                        <div
                          className={`max-w-[280px] rounded-[20px] px-4 py-3 text-sm leading-6 shadow-soft ${
                            message.type === "user"
                              ? "rounded-br-md bg-ink-deep"
                              : "rounded-bl-md bg-white text-foreground"
                          }`}
                        >
                          {message.text}
                        </div>

                        <span className="mt-1 block text-[10px] uppercase tracking-wider text-muted-foreground/70">
                          Just now
                        </span>
                      </div>
                    </div>
                  ))}
                  {selectedAction === "Build a Website" &&
                  websiteStep >= websiteFlow.length && (
                  <div className="mt-5 space-y-3 rounded-2xl bg-white p-4 shadow-soft">
                  <input
                  placeholder="Name"
                  value={leadData.name}
                  onChange={(e) =>
                  setLeadData({ ...leadData, name: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                  />

                  <input
                  placeholder="Email"
                  value={leadData.email}
                  onChange={(e) =>
                  setLeadData({ ...leadData, email: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                  />

                  <input
                  placeholder="Budget"
                  value={leadData.budget}
                  onChange={(e) =>
                  setLeadData({ ...leadData, budget: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                  />

                  <input
                  placeholder="Timeline"
                  value={leadData.timeline}
                  onChange={(e) =>
                  setLeadData({ ...leadData, timeline: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                  />

                  <button
                  className="w-full rounded-xl bg-sage py-3 font-medium text-white"
                  >
                  Schedule Free Consultation
                  </button>
                  </div>
                  )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
                {selectedAction === "Build a Website" &&
                websiteStep < websiteFlow.length
                ? websiteFlow[websiteStep].options.map((option) => (
                <button
                key={option}
                onClick={() => handleWebsiteFlow(option)}
                className={`rounded-full px-3 py-2 text-xs font-medium shadow-soft transition-all
                ${
                activeOption === option
                ? "bg-sage text-white border border-sage"
                : "border border-white/80 bg-white/70 text-foreground"
                }`}
                >
                {option}
                </button>
                ))
                : quickActions.map((action) => (
                <button
                key={action}
                onClick={() => handleQuickAction(action)}
                className="rounded-full border border-white/80 bg-white/70 px-3 py-2 text-xs font-medium text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:border-sage/50 hover:text-sage-deep"
                >
                {action}
                </button>
                ))}
            </div>

            <footer className="relative border-t border-white/75 bg-white/70 px-4 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-2 shadow-inset">
                <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-sage-soft/60 hover:text-sage-deep">
                  <Paperclip className="h-4 w-4" />
                </button>

                <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-sage-soft/60 hover:text-sage-deep">
                  <Smile className="h-4 w-4" />
                </button>

                <input
                  type="text"
                  placeholder="Ask anything…"
                  className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
                />

                <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-sage-soft/60 hover:text-sage-deep">
                  <Mic className="h-4 w-4" />
                </button>

                <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,var(--sage),color-mix(in_oklab,var(--inspinia-blue)_76%,var(--sage)))] text-white shadow-glow transition-transform hover:scale-105">
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-sage-deep" />
                Powered by AI
                <span className="text-muted-foreground/50">.</span>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sage-deep"
                >
                  Human handoff
                  <ExternalLink className="h-3 w-3" />
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
      >
        <span className="absolute inset-0 rounded-full bg-sage/35 blur-xl transition-opacity group-hover:opacity-80 chatbot-pulse-glow" />

        <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/14 ring-1 ring-white/35 backdrop-blur">
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Sparkles className="h-6 w-6" />
          )}
        </span>
      </button>
    </div>
  </div>
);
}


