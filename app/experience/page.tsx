import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";

const experiences = [
  {
    company: "Principal Financial Group",
    logo: "/logos/principal.png",
    role: "Software Engineer",
    period: "Apr 2023 – Present",
    bullets: [
      "Designed and maintained RESTful backend services using Java and Spring Boot in scalable microservice environments.",
      "Built responsive front-end features with React, TypeScript, and Next.js.",
      "Provisioned cloud infrastructure with AWS CDK and supported AWS services including Lambda, API Gateway, S3, and DynamoDB.",
    ],
  },
  {
    company: "Texas Capital Bank",
    logo: "/logos/texas-capital.png",
    role: "Full Stack Developer",
    period: "Jan 2021 – Mar 2023",
    bullets: [
      "Developed RESTful microservices with Spring Boot, Hibernate, and Maven in AWS-based environments.",
      "Built front-end features using React and managed asynchronous flows using Axios and async patterns.",
      "Created document management functionality using AWS S3 and supported transactional systems with PostgreSQL.",
    ],
  },
  {
    company: "Dish Network",
    logo: "/logos/dish.png",
    role: "Full Stack Developer",
    period: "Jan 2019 – Dec 2020",
    bullets: [
      "Developed Spring MVC applications and RESTful services with Spring Boot.",
      "Integrated MongoDB and optimized data access patterns for application performance.",
      "Contributed to Agile ceremonies, testing, logging, and team collaboration across feature delivery cycles.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Experience"
        title="Professional experience building enterprise software across backend, frontend, and cloud platforms."
        description="My work history reflects consistent ownership of features, system reliability, and collaborative delivery in Agile teams."
      />

      <section className="section container reveal">
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item hover-lift" key={experience.company}>
              <div className="timeline-header">
                <div className="brand-row">
                  <img src={experience.logo} alt={`${experience.company} logo`} className="entity-logo" />
                  <div>
                    <h2>{experience.role}</h2>
                    <p className="company">{experience.company}</p>
                  </div>
                </div>
                <p className="period">{experience.period}</p>
              </div>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
