import { CTA } from "./components/site/CTA";
import { ChatbotWidget } from "./components/site/ChatbotWidget";
import { Footer } from "./components/site/Footer";
import { Hero } from "./components/site/Hero";
import { Navbar } from "./components/site/Navbar";
import { Pricing } from "./components/site/Pricing";
import { Problem } from "./components/site/Problem";
import { Process } from "./components/site/Process";
import { Services } from "./components/site/Services";
export default App;

export function App() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
      {/* <ChatbotWidget /> */}
    </main>
  );
}
