import { motion } from "framer-motion";

const impacts = [
  { icon: "💸", label: "Lakhs spent", sub: "every year on agencies" },
  { icon: "⏱", label: "100s of hours", sub: "lost in coordination" },
  { icon: "📉", label: "Productivity loss", sub: "from misaligned briefs" },
  { icon: "🎯", label: "Missed opportunities", sub: "slow turnaround" },
  { icon: "😞", label: "Mediocre output", sub: "no matter what you spend" },
];

export function Problem() {
  return (
    <section id="problem" className="relative bg-background px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          ◆ The Problem / N°01
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl"
        >
          Today, businesses <br />
          have <span className="italic text-electric">2 options</span>.
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              tag: "Option 01",
              title: "Work with Freelancers",
              body: "Juggle content writers and designers separately. Every brief bounces back and forth — you become the unpaid project manager.",
              flow: ["Content Writer ⇄", "YOU (Client)", "⇄ Designer"],
            },
            {
              tag: "Option 02",
              title: "Hire a Creative Team",
              body: "Spend lakhs on salaries, onboarding and management. Scale is slow, quality is inconsistent, standups are endless.",
              flow: ["Content Writers", "Designers", "Others"],
            },
          ].map((opt, i) => (
            <motion.div
              key={opt.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-md border border-border bg-card p-8 md:p-10"
            >
              <div className="mb-2 inline-block rounded bg-destructive/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-destructive">
                {opt.tag}
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">{opt.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{opt.body}</p>
              <div className="mt-6 flex items-center gap-3 rounded border border-border bg-ink/60 px-4 py-3 font-mono text-xs text-muted-foreground">
                {opt.flow.map((f, fi) => (
                  <span key={fi} className={fi === 1 ? "text-electric font-semibold" : ""}>{f}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 rounded-md border border-border bg-card px-8 py-8"
        >
          <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">✦ The impact your business can't ignore</div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {impacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.7 }}
                className="text-center"
              >
                <div className="mb-2 text-3xl">{item.icon}</div>
                <div className="font-display text-sm font-bold text-destructive">{item.label}</div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="mt-8 text-center font-display text-xl font-medium text-muted-foreground md:text-2xl">
          Different models. Same operational struggle.
        </p>
      </div>
    </section>
  );
}
