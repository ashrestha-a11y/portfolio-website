import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import TechBadge from "../components/TechBadge";

const projects = [
  {
    title: "Software Engineering Portfolio Website",
    description:
      "A multi-page portfolio built with Next.js and TypeScript to present professional experience, resume download functionality, and a backend-powered contact form in a recruiter-friendly layout.",
    stack: ["Next.js", "React", "TypeScript", "Resend", "Responsive CSS"],
    outcome: "Demonstrates frontend structure, BFF integration, and responsive UI design for a school project and long-term professional use.",
  },
  {
    title: "Cloud-Native Enterprise Delivery",
    description:
      "Professional engineering work focused on scalable REST services, modern frontend integration, and AWS-backed deployment patterns for enterprise applications.",
    stack: ["Java", "Spring Boot", "React", "AWS", "CI/CD"],
    outcome: "Strengthened my ability to design production-ready services, collaborate across teams, and own features from development through support.",
  },
  {
    title: "Data Pipeline Automation",
    description:
      "Built and supported data movement workflows that connect operational systems with reporting platforms using automation and cloud-based processing.",
    stack: ["Node.js", "DynamoDB", "Snowflake", "CloudWatch"],
    outcome: "Improved reporting readiness and operational visibility while reinforcing best practices around monitoring and reliability.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Projects"
        title="Projects that reflect full-stack thinking, cloud familiarity, and practical execution."
        description="These examples highlight how I approach software engineering through architecture, implementation, maintainability, and measurable outcomes."
      />

      <section className="section container reveal">
        <div className="grid cards-3">
          {projects.map((project) => (
            <article className="card project-card hover-lift tilt-card" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tag-cloud compact">
                {project.stack.map((item) => (
                  <TechBadge key={item} name={item} small />
                ))}
              </div>
              <p className="project-outcome">
                <strong>Outcome:</strong> {project.outcome}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
