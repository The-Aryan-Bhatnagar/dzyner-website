import { motion } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    n: "01",
    t: "Basic Design",
    tag: "Entry-level",
    items: ["Social Media Creatives", "Web Banners & Ads", "Icon Design", "AI Generated Images", "Animated GIFs", "Google Web Stories", "Emailer Design"],
  },
  {
    n: "02",
    t: "Standard Design",
    tag: "Most Popular",
    items: ["Presentation Design", "Infographics (Web/Social)", "Print Infographics", "Brochure Design", "eBook Design", "Whitepaper Design", "Report Design", "Illustration (Marketing/Web)", "Comic Strip Design"],
  },
  {
    n: "03",
    t: "Advanced Design",
    tag: "Complex Projects",
    items: ["Data Visualization Infographics", "Presentation Infographics", "Infographic Reports", "Storyboarding", "Vector Illustrations", "Technical Illustrations", "Book & Magazine Illus.", "Cover Design", "Employee Welcome Kit"],
  },
  {
    n: "04",
    t: "Branding & Strategy",
    tag: "Full Identity",
    items: ["Logo Design", "Mascot Design", "Brand Identity Design", "Brand Design", "Marketing Campaign Design", "Marketing Collateral", "B2B Graphic Design"],
  },
  {
    n: "05",
    t: "Premium & Motion",
    tag: "High-end Output",
    items: ["Animated Infographics", "Infographic Videos", "Portrait Illustrations", "Book & Magazine Layout"],
  },
];

function TierCard({ s, i }: { s: typeof tiers[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  function handle(e: React.MouseEvent) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.05;
    const y = (e.clientY - r.top - r.height / 2) * 0.05;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }
  function reset() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handle}
      onMouseLeave={reset}
      className="group relative overflow-hidden rounded-md border border-border bg-card p-7 transition-colors duration-500 hover:border-electric/40 md:p-9"
      data-cursor="hover"
    >
      <div ref={ref} className="hover-magnetic relative z-10">
        <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>N°{s.n}</span>
          <span className="rounded bg-electric/15 px-2 py-0.5 text-electric">{s.tag}</span>
        </div>
        <h3 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {s.t}
        </h3>
        <ul className="mt-6 space-y-2">
          {s.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1 w-1 shrink-0 rounded-full bg-electric" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-electric/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative bg-ink px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          ✦ Services Offered / N°04
        </div>
        <div className="mb-16 flex items-end justify-between">
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
            Everything your<br />brand <span className="italic">needs</span>.
          </h2>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">
            From quick social posts to full brand systems — all under one roof, managed by your dedicated relationship manager.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {tiers.map((s, i) => <TierCard key={s.n} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
