import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"draw" | "fill" | "exit">("draw");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fill"), 1800);
    const t2 = setTimeout(() => setPhase("exit"), 2400);
    const t3 = setTimeout(onComplete, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Noise overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Ambient glow behind text */}
          <div
            className="pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[120px]"
            style={{
              background: "radial-gradient(circle, oklch(0.92 0.27 124 / 0.12) 0%, transparent 70%)",
              transition: "opacity 0.6s",
              opacity: phase === "fill" ? 1 : 0.4,
            }}
          />

          {/* DZYNER SVG text */}
          <svg
            viewBox="0 0 900 140"
            className="w-[90vw] max-w-[900px]"
            overflow="visible"
          >
            <defs>
              <style>{`
                .dzyner-stroke {
                  fill: none;
                  stroke: oklch(0.92 0.27 124);
                  stroke-width: 1.2;
                  stroke-dasharray: 3000;
                  stroke-dashoffset: 3000;
                  animation: drawStroke 2s cubic-bezier(0.16,1,0.3,1) forwards;
                  font-family: 'Inter Tight', sans-serif;
                  font-size: 160px;
                  font-weight: 800;
                  letter-spacing: -8px;
                }
                .dzyner-fill {
                  fill: oklch(0.92 0.27 124);
                  stroke: none;
                  opacity: 0;
                  font-family: 'Inter Tight', sans-serif;
                  font-size: 160px;
                  font-weight: 800;
                  letter-spacing: -8px;
                  animation: fadeInFill 0.5s ease forwards;
                  animation-delay: 2s;
                }
                @keyframes drawStroke {
                  to { stroke-dashoffset: 0; }
                }
                @keyframes fadeInFill {
                  to { opacity: 1; }
                }
              `}</style>
            </defs>
            <text x="50%" y="120" textAnchor="middle" className="dzyner-stroke">
              DZYNER
            </text>
            <text x="50%" y="120" textAnchor="middle" className="dzyner-fill">
              DZYNER
            </text>
          </svg>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-6 font-mono text-lg uppercase tracking-[0.55em] md:text-2xl"
            style={{ color: "oklch(0.92 0.27 124 / 0.55)" }}
          >
            by Impactful Pitch
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-10 h-px w-24 overflow-hidden rounded-full"
            style={{ background: "oklch(0.92 0.27 124 / 0.15)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "oklch(0.92 0.27 124)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
