import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import TechBadge from "../components/TechBadge";

const skillGroups = [
  {
    group: "Languages",
    highlight: "Backend and scripting fundamentals",
    skills: ["Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    group: "Frameworks & Libraries",
    highlight: "Modern application delivery",
    skills: ["Spring Boot", "Spring MVC", "Hibernate", "React", "Next.js"],
  },
  {
    group: "Cloud & DevOps",
    highlight: "Deployment, observability, and automation",
    skills: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "CloudWatch", "AWS CDK", "GitHub Actions"],
  },
  {
    group: "Databases & Data",
    highlight: "Structured and NoSQL data solutions",
    skills: ["PostgreSQL", "DynamoDB", "MongoDB", "Snowflake"],
  },
];

export default function SkillsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Technical Skills"
        title="A balanced skill set across backend, frontend, cloud, and delivery tooling."
        description="These technologies reflect the tools I use to build maintainable applications, deliver features reliably, and support modern engineering workflows."
      />

      <section className="section container reveal">
        <div className="grid cards-2">
          {skillGroups.map((group) => (
            <article className="card hover-lift tilt-card skill-card" key={group.group}>
              <p className="eyebrow small">{group.highlight}</p>
              <h2>{group.group}</h2>
              <div className="tag-cloud">
                {group.skills.map((skill) => (
                  <TechBadge key={skill} name={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
