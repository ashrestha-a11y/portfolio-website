import Link from "next/link";
import Navbar from "./components/Navbar";
import TechBadge from "./components/TechBadge";

const featuredSkills = ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "AWS", "PostgreSQL", "CI/CD"];
const featuredProjects = [
  { title: "Software Engineering Portfolio Website", description: "A responsive multi-page portfolio with a Next.js frontend, server-side contact form processing, and recruiter-focused content organization.", stack: ["Next.js", "React", "TypeScript", "Resend"] },
  { title: "Cloud-Native Enterprise Delivery", description: "Professional engineering work centered on scalable services, front-end integration, and AWS-backed application delivery in Agile environments.", stack: ["Java", "Spring Boot", "AWS", "GitHub Actions"] },
  { title: "Data Pipeline Automation", description: "Built reliable workflows for data movement, monitoring, and reporting using cloud services and modern engineering practices.", stack: ["DynamoDB", "Snowflake", "Node.js", "CloudWatch"] },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="hero-shell">
        <div className="hero-backdrop" aria-hidden="true"><span className="orb orb-one" /><span className="orb orb-two" /><span className="orb orb-three" /><span className="grid-glow" /></div>
        <div className="container hero-grid">
          <div className="reveal"><p className="eyebrow">Software Engineer</p><h1>Building reliable full-stack applications with thoughtful engineering and modern cloud tools.</h1><p className="intro">I design and deliver scalable web applications using Java, Spring Boot, React, Next.js, TypeScript, and AWS. This portfolio highlights my experience, projects, and the engineering mindset I bring to software development.</p><div className="hero-actions"><a className="button primary glow-button" href="/Resume_Abhishek_Shrestha.docx" download>Download Resume</a><Link className="button secondary" href="/contact">Contact Me</Link></div></div>
          <aside className="card hero-card reveal delay-1 hover-lift tilt-card"><div className="stat-grid"><div><strong>6+</strong><span>Years of Experience</span></div><div><strong>3</strong><span>Industries Served</span></div><div><strong>Full-Stack</strong><span>Frontend to Cloud Delivery</span></div><div><strong>AWS</strong><span>Cloud-Native Solutions</span></div></div></aside>
        </div>
      </section>
      <section className="section container reveal"><div className="section-heading"><div><p className="eyebrow">Featured Skills</p><h2>Core technologies I use regularly</h2></div><Link href="/skills" className="text-link">View all skills →</Link></div><div className="tag-cloud">{featuredSkills.map((skill)=><TechBadge key={skill} name={skill} />)}</div></section>
      <section className="section container reveal delay-1"><div className="section-heading"><div><p className="eyebrow">Featured Projects</p><h2>Practical work that demonstrates engineering depth</h2></div><Link href="/projects" className="text-link">Explore projects →</Link></div><div className="grid cards-3">{featuredProjects.map((project)=><article className="card project-card hover-lift tilt-card" key={project.title}><h3>{project.title}</h3><p>{project.description}</p><div className="tag-cloud compact">{project.stack.map((item)=><TechBadge key={item} name={item} small />)}</div></article>)}</div></section>
      <section className="section container reveal delay-2"><div className="resume-preview card hover-lift"><div><p className="eyebrow">Education</p><h2>Academic background supporting my engineering career</h2><p>Explore the education page to review the degrees and academic foundation that complement my software engineering experience.</p><div className="hero-actions small-gap"><Link className="button secondary" href="/education">View Education</Link><a className="button primary glow-button" href="/Resume_Abhishek_Shrestha.docx" download>Download Resume</a></div></div></div></section>
    </main>
  );
}
