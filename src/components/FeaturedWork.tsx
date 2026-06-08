import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";

const services = [
  { num: "01", title: "Social Media", client: "Basic Design", year: "2024", tag: "Posts · Stories · Reels", img: w1 },
  { num: "02", title: "Presentations", client: "Standard Design", year: "2024", tag: "Decks · Pitch · Reports", img: w2 },
  { num: "03", title: "Brand Identity", client: "Branding & Strategy", year: "2024", tag: "Logo · Identity · Brand", img: w3 },
  { num: "04", title: "Infographics", client: "Advanced Design", year: "2024", tag: "Data · Reports · Visual", img: w4 },
  { num: "05", title: "Motion & Video", client: "Premium & Motion", year: "2024", tag: "Animation · GIF · Film", img: w5 },
];

export function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section id="work" ref={ref} className="relative h-[500vh] bg-background">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="flex items-end justify-between px-6 pb-10 pt-32 md:px-10">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              ◆ Services Showcase / 2024—25
            </div>
            <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
              Design that <span className="italic text-electric">speaks</span>.
            </h2>
          </div>
          <div className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:block">
            Drag · Scroll →
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-6 md:gap-10 md:pl-10">
          {services.map((p, i) => (
            <article
              key={p.num}
              className="group relative h-[68vh] w-[78vw] shrink-0 overflow-hidden rounded-md bg-card md:w-[58vw] lg:w-[44vw]"
              data-cursor="hover"
            >
              <img
                src={p.img}
                alt={p.title}
                loading={i < 2 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
                <div className="flex justify-between font-mono text-xs uppercase tracking-widest text-foreground/80">
                  <span>N°{p.num}</span>
                  <span>{p.year}</span>
                </div>
                <div>
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-electric">
                    {p.tag}
                  </div>
                  <h3 className="font-display text-5xl font-bold leading-none tracking-tight md:text-7xl">
                    {p.title}
                  </h3>
                  <div className="mt-2 text-sm text-muted-foreground">{p.client}</div>
                </div>
              </div>
            </article>
          ))}

          {/* End CTA card */}
          <div className="grid w-[60vw] shrink-0 place-items-center pr-10">
            <a href="#contact" className="hover-magnetic group flex flex-col items-center text-center" data-cursor="hover">
              <span className="font-display text-7xl font-bold tracking-tight md:text-9xl">
                + All Services
              </span>
              <span className="mt-4 font-mono text-xs uppercase tracking-widest text-electric">
                View full catalogue →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
