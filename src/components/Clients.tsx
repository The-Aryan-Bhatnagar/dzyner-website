const row1 = ["Coca-Cola", "Vadilal", "PVR Cinemas", "JAWA", "Studio 11 Salon", "Hotel Clarks Shiraz", "ZYPP", "Charge Zone", "Ecoline", "NANTA Technology", "SECHO", "SuperUs", "MÄNNLICH", "DR.SU"];
const row2 = ["GREST", "MBA Chai Wala", "Meganet", "Zoivane Pets", "Ocean Blue", "FusionFit", "RE/MAX", "BEYOBO", "Credorbit", "Jaipur Watch Co.", "Dandal's", "OUTLAWS", "Seven Robotics", "TOYFLIX"];

function Row({ brands, reverse = false }: { brands: string[]; reverse?: boolean }) {
  const all = [...brands, ...brands];
  return (
    <div className="overflow-hidden mask-fade-x">
      <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-slow [animation-direction:reverse]" : "animate-marquee-slow"}`}>
        {all.map((b, i) => (
          <div key={i} className="group mx-8 flex items-center md:mx-12" data-cursor="hover">
            <span className="font-display text-3xl font-bold tracking-tight text-muted-foreground/35 transition-all duration-500 group-hover:text-electric group-hover:[text-shadow:0_0_30px_var(--electric-glow)] md:text-5xl">
              {b}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section id="clients" className="relative border-y border-border bg-background py-20 md:py-28">
      <div className="mb-10 px-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:px-10">
        ◇ Trusted by 10,000+ businesses across India and beyond
      </div>
      <div className="flex flex-col gap-6">
        <Row brands={row1} />
        <Row brands={row2} reverse />
      </div>
    </section>
  );
}
