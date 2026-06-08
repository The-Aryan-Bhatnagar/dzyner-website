import { motion } from "framer-motion";

const plans = [
  {
    n: "01",
    title: "Pay Per Project",
    sub: "Perfect for one-time needs",
    featured: false,
    features: ["No long-term commitment", "Perfect for one-time projects", "Fast turnaround", "Quality guaranteed", "Unlimited revisions"],
    cta: "Get Started",
  },
  {
    n: "02",
    title: "Subscription / Retainer",
    sub: "Consistent monthly creativity",
    featured: true,
    badge: "★ Most Popular",
    features: ["Consistent monthly creativity", "Dedicated creative team", "Priority delivery", "Brand style retained", "Unlimited revisions", "Monthly strategy calls"],
    cta: "Book a Call",
  },
  {
    n: "03",
    title: "Hourly Hire",
    sub: "Flexible for ad-hoc needs",
    featured: false,
    features: ["Flexible & task-specific", "Ideal for ad-hoc needs", "Pay only for hours used", "Scale up anytime", "No minimum commitment"],
    cta: "Get Started",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-background px-6 py-28 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-electric/8 blur-[140px]" />
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          ◆ Flexible by Design / N°05
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl"
        >
          Easy to access. <br /><span className="italic text-electric">Flexible</span> by design.
        </motion.h2>
        <p className="mb-16 text-muted-foreground md:text-lg">
          Choose the model that fits your needs. Different models. Same quality.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col rounded-md border p-8 transition-all duration-300 hover:-translate-y-2 md:p-10 ${
                p.featured
                  ? "border-electric bg-electric/5 shadow-[0_0_60px_-15px] shadow-electric"
                  : "border-border bg-card hover:border-electric/40"
              } ${i === 1 ? "md:-mt-4 md:mb-4" : ""}`}
              data-cursor="hover"
            >
              {p.featured && p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-electric px-4 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-ink">
                  {p.badge}
                </div>
              )}
              <div className="grid h-9 w-9 place-items-center rounded-full border border-electric/40 font-mono text-xs text-electric">
                {p.n}
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.sub}</p>
              <div className="my-6 h-px bg-border" />
              <ul className="mb-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="text-electric">✓</span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all ${
                  p.featured
                    ? "bg-electric text-ink hover:shadow-[0_0_40px_-8px] hover:shadow-electric"
                    : "border border-border text-foreground hover:border-electric hover:text-electric"
                }`}
              >
                {p.cta} →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
        >
          🛡 Different models. Same quality.
        </motion.p>
      </div>
    </section>
  );
}
