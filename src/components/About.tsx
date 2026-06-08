import { motion } from "framer-motion";

const audience = [
  { icon: "🚀", title: "Startups", sub: "Move fast. We keep up." },
  { icon: "🏪", title: "Small Businesses", sub: "Big designs. Smart partner." },
  { icon: "👤", title: "Founders", sub: "You focus on growth. We handle the creatives." },
  { icon: "💼", title: "Agencies", sub: "Scale your delivery. Delight your clients." },
  { icon: "🏢", title: "Enterprises", sub: "High quality. At scale. Every time." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background px-6 py-28 md:px-10 md:py-40">
      <div className="absolute right-[-8%] top-1/4 h-[500px] w-[500px] rounded-full bg-electric/8 blur-[120px] animate-float" />
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          ▸ Who It's For / N°03
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-[7vw]"
        >
          Who is <span className="italic text-electric">DZYNER</span> <br />
          built for<span className="text-electric">?</span>
        </motion.h2>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Every business, every scale, every goal. If you need creative output
          without the overhead — DZYNER was made for you.
        </p>

        {/* Audience cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {audience.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col items-center overflow-hidden rounded-md border border-border bg-card px-6 py-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-electric/60 hover:shadow-[0_20px_60px_-15px] hover:shadow-electric/20"
              data-cursor="hover"
            >
              <div className="mb-4 grid h-16 w-16 place-items-center rounded-full border-2 border-electric/30 bg-card text-3xl transition-all duration-500 group-hover:border-electric group-hover:shadow-[0_0_20px_-4px] group-hover:shadow-electric">
                {a.icon}
              </div>
              <h3 className="font-display text-lg font-bold tracking-tight">{a.title}</h3>
              <p className="mt-2 text-xs leading-snug text-muted-foreground">{a.sub}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.92 0.27 124 / 0.08), transparent 70%)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
