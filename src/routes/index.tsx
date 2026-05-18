import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Services } from "@/components/site/Services";

import { Work } from "@/components/site/Work";
// import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
//import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { ChatbotWidget } from "@/components/site/ChatbotWidget";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      
      <Work />
      {/* <Testimonials /> */}
      <Process />
      <Pricing />
      {/* <FAQ /> */}
      <CTA />
      <Footer />
      <ChatbotWidget />
    </main>
  );
}
