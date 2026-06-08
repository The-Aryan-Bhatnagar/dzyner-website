export function TopMarquee() {
  const words = [
    "Social Media Design",
    "Brand Identity",
    "Presentation Design",
    "Infographics & Reports",
    "Motion & Animation",
    "Web Banners & Ads",
    "Logo Design",
    "Whitepaper Design",
  ];
  const all = [...words, ...words, ...words];
  return (
    <div className="relative border-y border-border bg-ink py-6 overflow-hidden mask-fade-x">
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((w, i) => (
          <span key={i} className="flex items-center font-display text-3xl font-medium tracking-tight md:text-5xl">
            <span className={i % 2 ? "text-stroke" : "text-foreground"}>{w}</span>
            <span className="mx-10 text-electric md:mx-16">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
