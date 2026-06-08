import { motion } from "framer-motion";

const links = [
  { label: "Solution", href: "#solution" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-6 pt-6 md:px-10"
    >
      <nav className="glass mx-auto flex max-w-[1600px] items-center justify-between rounded-full px-5 py-3 md:px-7 md:py-4">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight md:text-xl">
            DZYNER<span className="text-electric">.</span>
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-muted-foreground">
            by Impactful Pitch
          </span>
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="group relative inline-block py-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-electric transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hover-magnetic group flex items-center gap-2 rounded-full border border-border bg-electric px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink transition-all hover:shadow-[0_0_40px_-8px] hover:shadow-electric"
        >
          Book Free Call
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </nav>
    </motion.header>
  );
}
