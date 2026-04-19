import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title="Let’s connect about opportunities, projects, and collaboration."
        description="Use the form below to send a message. The contact workflow is powered by a Next.js backend route and email integration."
      />

      <section className="section container contact-layout reveal">
        <ContactForm />

        <aside className="card contact-details hover-lift tilt-card">
          <h2>Contact Details</h2>
          <p>
            <strong>Email:</strong>
            <br />
            abhishek.shrestha289@gmail.com
          </p>
          <p>
            <strong>Phone:</strong>
            <br />
            571.490.4650
          </p>
          <p>
            <strong>Location:</strong>
            <br />
            Justin, Texas
          </p>
        </aside>
      </section>
    </main>
  );
}
