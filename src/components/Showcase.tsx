import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import showcase from "@/assets/showcase.jpg";

const benefits = [
  { icon: "🚫", label: "No hiring stress" },
  { icon: "💰", label: "No salary burden" },
  { icon: "⏰", label: "No training required" },
  { icon: "🎯", label: "Single point of contact" },
  { icon: "🔄", label: "No back & forths" },
  { icon: "⭐", label: "Consistent quality" },
];

const teams = [
  { icon: "📱", label: "Social Media\nCreative Team" },
  { icon: "📊", label: "Reports &\nPresentations" },
  { icon: "📢", label: "Digital Ads\nCreative Team" },
  { icon: "✦",  label: "Many\nMore..." },
];

export function Showcase() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: quoteRef, offset: ["start end", "end start"] });
  const scale   = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const y       = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* ── Cinematic philosophy strip ── */}
      <section ref={quoteRef} className="relative h-[200vh] bg-ink">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <motion.img
            src={showcase}
            alt="DZYNER cinematic detail"
            loading="lazy"
            style={{ scale, y }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
          <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-electric">
              ◊ Our Promise
            </div>
            <p className="text-balance font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-6xl">
              We deliver brands that feel <span className="italic text-electric">inevitable</span> —
              designed with precision, managed with care, delivered 3× faster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Solution / How it works ── */}
      <section id="solution" className="relative bg-ink px-6 py-28 md:px-10 md:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-electric/8 blur-[140px]" />

        <div className="relative mx-auto max-w-[1600px]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-electric">
            ◉ How It Works / N°02
          </div>
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
            The solution: <span className="italic text-stroke">DZYNER</span><span className="text-electric">.</span>
          </h2>
          <p className="mt-4 font-display text-xl font-medium text-muted-foreground md:text-2xl">
            One partner. Multiple creative teams. Endless possibilities.
          </p>

          {/* Workflow */}
          <div className="mt-16 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9 }}
              className="rounded-md border border-border bg-card px-12 py-6 text-center"
            >
              <div className="text-2xl">👤</div>
              <div className="mt-2 font-display text-lg font-bold">YOU (Client)</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Share your creative needs</div>
            </motion.div>

            <div className="flex flex-col items-center py-1">
              <div className="h-10 w-px bg-gradient-to-b from-electric to-transparent" />
              <div className="text-xs text-electric">▼</div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="rounded-md border-2 border-electric bg-electric/5 px-14 py-7 text-center shadow-[0_0_40px_-10px] shadow-electric"
            >
              <div className="text-2xl">⚡</div>
              <div className="mt-2 font-display text-xl font-bold text-electric">DZYNER</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Relationship Manager</div>
              <div className="mt-1 inline-block rounded bg-electric/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-electric">
                Single Point Of Contact
              </div>
            </motion.div>

            <div className="flex flex-col items-center py-1">
              <div className="h-10 w-px bg-gradient-to-b from-electric to-transparent" />
              <div className="text-xs text-electric">▼</div>
            </div>

            <div className="grid w-full max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
              {teams.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.7 }}
                  className={`rounded-md border px-4 py-5 text-center text-sm font-semibold transition-all hover:border-electric hover:bg-electric/5 hover:text-electric ${
                    i === 3 ? "border-electric/30" : "border-border bg-card"
                  }`}
                >
                  <div className="mb-2 text-2xl">{t.icon}</div>
                  <div className="whitespace-pre-line text-xs leading-snug">{t.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-20">
            <h3 className="mb-8 font-display text-3xl font-bold tracking-tight md:text-4xl">Why businesses choose DZYNER</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.7 }}
                  className="flex items-center gap-4 rounded-md border border-border bg-card px-5 py-4 transition-all hover:border-electric/40 hover:bg-electric/5"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded border border-electric/30 bg-electric/10 text-lg">
                    {b.icon}
                  </div>
                  <span className="text-sm font-semibold">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
