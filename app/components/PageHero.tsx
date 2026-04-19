type PageHeroProps = { eyebrow: string; title: string; description: string; align?: "left" | "center"; };
export default function PageHero({ eyebrow, title, description, align = "left" }: PageHeroProps) {
  return (
    <section className={`page-hero ${align === "center" ? "centered" : ""}`}>
      <div className="hero-backdrop" aria-hidden="true"><span className="orb orb-one" /><span className="orb orb-two" /><span className="orb orb-three" /><span className="grid-glow" /></div>
      <div className="container reveal"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="intro">{description}</p></div>
    </section>
  );
}
