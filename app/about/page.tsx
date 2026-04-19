import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";

const values = [
  {
    title: "Practical Engineering",
    text: "I focus on building solutions that are maintainable, measurable, and useful in real production environments.",
  },
  {
    title: "Continuous Improvement",
    text: "I enjoy refining architecture, workflows, and developer experience to improve delivery quality over time.",
  },
  {
    title: "Collaboration",
    text: "Strong communication and teamwork are essential to shipping reliable software in Agile environments.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="About Me"
        title="A software engineer focused on dependable systems and thoughtful delivery."
        description="My background combines full-stack development, cloud platforms, and modern engineering practices with a strong emphasis on collaboration and maintainability."
      />

      <section className="section container prose-block reveal">
        <p>
          I am a software engineer with more than six years of experience designing, developing,
          and deploying full-stack applications. My work spans backend development with Java and
          Spring Boot, front-end delivery with React and Next.js, and cloud-native systems built on AWS.
        </p>
        <p>
          I am currently pursuing a Master of Engineering Management at Cumberland University.
          This portfolio was created as both a professional brand asset and a school project that
          demonstrates architecture, responsive design, backend integration, and iterative development.
        </p>
      </section>

      <section className="section container reveal delay-1">
        <div className="grid cards-3">
          {values.map((value) => (
            <article className="card hover-lift tilt-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
