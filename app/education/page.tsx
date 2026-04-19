import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";

const education = [
  {
    school: "Cumberland University",
    degree: "Master of Engineering Management",
    period: "Expected 2027",
    logo: "/logos/cumberland.png",
    details: [
      "Graduate studies focused on engineering leadership, decision-making, and project execution.",
      "Coursework supports practical software delivery, operations, and management skills.",
    ],
  },
  {
    school: "Virginia International University",
    degree: "Master of Science in Information Technology",
    period: "May 2017",
    logo: "/logos/viu.png",
    details: [
      "Advanced study in information systems, software development, and applied technology concepts.",
      "Built a stronger foundation in enterprise systems and technical problem-solving.",
    ],
  },
  {
    school: "Sharda University",
    degree: "Bachelor of Computer Applications",
    period: "May 2014",
    logo: "/logos/sharda.png",
    details: [
      "Undergraduate preparation in programming, databases, software design, and core computer science topics.",
      "Developed the base technical skills that supported later full-stack engineering work.",
    ],
  },
];

export default function EducationPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Education"
        title="Academic background"
        description="A summary of the degrees and academic foundation that support my software engineering career."
      />

      <section className="section container reveal is-visible">
        <div className="grid cards-1">
          {education.map((item) => (
            <article className="card hover-lift tilt-card" key={item.school}>
              <div className="resume-list-item education-card-header">
                <div className="brand-row">
                  <img src={item.logo} alt={`${item.school} insignia`} className="entity-logo" />
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                  </div>
                </div>
                <span>{item.period}</span>
              </div>
              <ul className="education-points">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
