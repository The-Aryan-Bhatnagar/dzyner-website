import { motion } from "framer-motion";

const managers = [
  { name: "Mr. Nikhil Sharma", phone: "+91 8077439014", wa: "918077439014" },
  { name: "Mr. Rahul Sinha", phone: "+91 7739500297", wa: "917739500297" },
  { name: "Mr. Akanshit Bhatnagar", phone: "+91 7351712217", wa: "917351712217" },
];

export function Contact() {
  return (
    <footer id="contact" className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-ink px-6 pb-10 pt-28 md:px-10 md:pt-40 noise">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-electric/12 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="mb-10 font-mono text-[11px] uppercase tracking-[0.3em] text-electric">
          ◉ Get In Touch / N°06
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[13vw] font-bold leading-[0.85] tracking-[-0.05em] md:text-[10vw]"
        >
          Let's build <br />
          something <span className="italic text-stroke">iconic</span><span className="text-electric">.</span>
        </motion.h2>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          {/* RM cards */}
          <div className="md:col-span-5">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Our Relationship Managers
            </div>
            <div className="flex flex-col gap-4">
              {managers.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.8 }}
                  className="flex items-center justify-between rounded-md border border-border bg-card px-5 py-4 transition-all hover:border-electric/40 hover:bg-electric/5"
                >
                  <div>
                    <div className="font-display text-base font-bold">{m.name}</div>
                    <div className="mt-0.5 font-mono text-xs text-electric">{m.phone}</div>
                  </div>
                  <a
                    href={`https://wa.me/${m.wa}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[#1db954] hover:shadow-[0_0_20px_-4px_rgba(37,211,102,0.5)]"
                  >
                    💬 WhatsApp
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-electric/30 bg-electric/5 px-5 py-5">
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-electric">Response Time</div>
              <div className="mt-1 font-display text-2xl font-bold">Within 2 Hours</div>
              <div className="mt-0.5 text-xs text-muted-foreground">Mon–Sat, 9 AM – 7 PM IST</div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-7">
            <div className="rounded-md border border-border bg-card p-7 md:p-9">
              <h3 className="mb-6 font-display text-2xl font-bold tracking-tight">Send Us a Message</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { id: "name", label: "Your Name", placeholder: "Rahul Kumar" },
                  { id: "company", label: "Business Name", placeholder: "Your Company" },
                  { id: "email", label: "Email", placeholder: "you@business.com" },
                  { id: "phone", label: "Phone", placeholder: "+91 9999999999" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="mb-1.5 block font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      {f.label}
                    </label>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      className="w-full rounded border border-border bg-ink px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-electric focus:shadow-[0_0_20px_-8px] focus:shadow-electric"
                    />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="mb-1.5 block font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    Design Requirement
                  </label>
                  <select className="w-full rounded border border-border bg-ink px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-electric">
                    <option value="">Select a service...</option>
                    <option>Social Media Creatives</option>
                    <option>Presentation Design</option>
                    <option>Brand Identity</option>
                    <option>Infographics &amp; Reports</option>
                    <option>Motion &amp; Animation</option>
                    <option>Subscription / Retainer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1.5 block font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full resize-none rounded border border-border bg-ink px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-electric focus:shadow-[0_0_20px_-8px] focus:shadow-electric"
                  />
                </div>
              </div>
              <button
                onClick={(e) => {
                  const btn = e.currentTarget;
                  btn.textContent = "✓ Sent! We'll be in touch soon.";
                  btn.style.background = "#1db954";
                }}
                className="mt-4 w-full rounded-full bg-electric py-4 font-bold text-sm text-ink transition-all hover:shadow-[0_0_50px_-10px] hover:shadow-electric"
              >
                Send Message →
              </button>
              <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                ⚡ Typically respond within 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 flex w-full max-w-[1600px] flex-col items-start justify-between gap-6 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
        <div>© 2024 DZYNER by Impactful Pitch — All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">LinkedIn</a>
          <a href="https://wa.me/918077439014" target="_blank" rel="noreferrer" className="hover:text-electric">WhatsApp</a>
        </div>
        <div>Agra, India — Design Create Inspire</div>
      </div>
    </footer>
  );
}
