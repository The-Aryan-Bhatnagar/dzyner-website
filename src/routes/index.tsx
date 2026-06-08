import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TopMarquee } from "@/components/Marquee";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Problem } from "@/components/Problem";
import { Showcase } from "@/components/Showcase";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Clients } from "@/components/Clients";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DZYNER — A Creative Design Studio For Modern Businesses" },
      { name: "description", content: "DZYNER by Impactful Pitch. One partner. Multiple creative teams. 150K+ designs, 10K+ clients, 3X faster." },
      { property: "og:title", content: "DZYNER — Creative Design Studio For Modern Businesses" },
      { property: "og:description", content: "Social media, presentations, branding, infographics & more. No hiring, no overhead." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <Hero />
      <TopMarquee />
      <FeaturedWork />
      <Problem />
      <Showcase />
      <About />
      <Services />
      <Clients />
      <Pricing />
      <Contact />
    </main>
  );
}
