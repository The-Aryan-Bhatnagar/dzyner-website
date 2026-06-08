import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 2000;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

const stats = [
  { n: 150, s: "K+", l: "Designs Created" },
  { n: 10,  s: "K+", l: "Clients Served"  },
  { n: 3,   s: "X",  l: "Faster Delivery" },
];

const lines = ["A Creative", "Design Studio", "For Modern"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y     = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[720px] w-full overflow-hidden noise">
      {/* Background image with slow zoom */}
      <motion.div
        style={{ scale, y }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img src={heroImg} alt="DZYNER" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
      </motion.div>

      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-3xl transition-opacity duration-500"
        style={{
          left: mouse.x, top: mouse.y,
          background: "radial-gradient(circle, oklch(0.92 0.27 124 / 0.6) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="relative z-20 flex h-full flex-col justify-between px-6 pb-10 pt-32 md:px-10 md:pb-14"
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mx-auto flex w-full max-w-[1600px] items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric" />
            Creative Design Studio
          </span>
          <span className="hidden md:inline">by Impactful Pitch</span>
        </motion.div>

        {/* Headline */}
        <div className="mx-auto w-full max-w-[1600px]">
          <h1 className="font-display text-[17vw] font-bold leading-[0.85] tracking-[-0.06em] md:text-[13vw]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block ${i === 1 ? "italic text-stroke" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.76, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Businesses<span className="text-electric">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
          >
            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.l} className="border-l-2 border-electric pl-4">
                  <div className="font-display text-3xl font-bold text-electric md:text-4xl">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                data-cursor="hover"
                className="hover-magnetic group inline-flex items-center gap-3 rounded-full bg-electric px-6 py-4 text-sm font-bold text-ink transition-all hover:shadow-[0_0_60px_-10px] hover:shadow-electric"
              >
                Book Free Consultation
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ink/15 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#problem" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
                Learn More ↓
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          Scroll ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
