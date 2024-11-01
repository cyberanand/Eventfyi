import React from "react";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - Evefy</title>
        <meta
          name="description"
          content="Learn more about Evefy, our mission, vision, and how we empower effortless event management."
        />
      </Head>
      <div style={styles.container}>
        {/* Introduction Section */}
        <section style={styles.section}>
          <h1 style={styles.headline}>
            Empowering Effortless Event Management
          </h1>
          <p style={styles.introText}>
            Evefy is a pioneering platform that connects individuals,
            businesses, and organizations with top-tier event managers. In Phase
            1, we serve as a comprehensive database that curates the best event
            management professionals based on your specific needs and
            preferences. We believe in making event planning easy, accessible,
            and efficient by helping you find the right experts effortlessly.
          </p>
        </section>

        {/* Our Mission */}
        <section style={styles.flexSection}>
          <div style={styles.imageContainer}>
            <img
              src="/images/mission.jpg"
              alt="Our Mission"
              style={styles.image}
            />
          </div>
          <div style={styles.textContainer}>
            <h2 style={styles.subheading}>Our Mission</h2>
            <p style={styles.paragraph}>
              At Evefy, our mission is to revolutionize the event management
              industry by streamlining the process of finding trusted
              professionals. We aim to reduce the time, effort, and uncertainty
              involved in planning events, offering a platform where you can
              discover, compare, and select event managers that match your
              vision and budget.
            </p>
          </div>
        </section>

        {/* Our Vision */}
        <section
          style={{ ...styles.flexSection, flexDirection: "row-reverse" }}
        >
          <div style={styles.imageContainer}>
            <img
              src="/images/vision.jpg"
              alt="Our Vision"
              style={styles.image}
            />
          </div>
          <div style={styles.textContainer}>
            <h2 style={styles.subheading}>Our Vision</h2>
            <p style={styles.paragraph}>
              We envision a future where event planning is no longer a stressful
              or time-consuming task. Through Evefy, we strive to build a global
              ecosystem of event professionals that transforms how individuals
              and businesses plan, organize, and execute their events, no matter
              the scale.
            </p>
          </div>
        </section>

        {/* Our Offering */}
        <section style={styles.flexSection}>
          <div style={styles.imageContainer}>
            <img
              src="/images/offering.jpg"
              alt="What We Offer"
              style={styles.image}
            />
          </div>
          <div style={styles.textContainer}>
            <h2 style={styles.subheading}>What We Offer</h2>
            <p style={styles.paragraph}>
              Evefy provides a curated list of highly rated event managers based
              on customer preferences. Our platform enables users to explore
              options tailored to their event type, budget, and location without
              any initial cost. Whether you're planning a wedding, corporate
              event, or private gathering, Evefy connects you with event
              managers who can bring your vision to life.
            </p>
          </div>
        </section>

        {/* Why Evefy */}
        <section
          style={{ ...styles.flexSection, flexDirection: "row-reverse" }}
        >
          <div style={styles.imageContainer}>
            <img
              src="/images/why-us.jpg"
              alt="Why Evefy"
              style={styles.image}
            />
          </div>
          <div style={styles.textContainer}>
            <h2 style={styles.subheading}>Why Evefy?</h2>
            <ul style={styles.list}>
              <li>
                Expert Curation: We meticulously select and recommend event
                managers based on reviews, performance, and customer feedback.
              </li>
              <li>
                User-Friendly Platform: Our easy-to-use interface helps you find
                the best event professionals with minimal effort.
              </li>
              <li>
                Personalized Suggestions: Each recommendation is customized to
                fit your specific event needs, ensuring a seamless experience.
              </li>
            </ul>
          </div>
        </section>

        {/* Founders Section */}
        <section style={styles.foundersSection}>
          <h2 style={styles.subheading}>Meet Our Founders</h2>
          <div style={styles.foundersGrid}>
            {/* Loop over founder data to display each person's info */}
            {foundersData.map((founder, index) => (
              <div key={index} style={styles.founderCard}>
                <img
                  src={founder.photo}
                  alt={founder.name}
                  style={styles.founderImage}
                />
                <h3 style={styles.founderName}>{founder.name}</h3>
                <p style={styles.founderRole}>{founder.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Section */}
        <section style={styles.closingSection}>
          <div style={styles.closingContent}>
            <h2 style={styles.subheading}>
              Join Us in Transforming Event Management
            </h2>
            <p style={styles.paragraph}>
              At Evefy, we are dedicated to making every event a success by
              simplifying the process from the very start. Whether you're
              organizing a small family event or a large corporate affair, our
              platform is here to ensure that you have access to the best
              professionals, effortlessly.
            </p>
            <button style={styles.ctaButton}>
              Start Exploring Event Managers Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

const foundersData = [
  { name: "Founder 1", role: "CEO", photo: "/images/founder1.jpg" },
  { name: "Founder 2", role: "CTO", photo: "/images/founder2.jpg" },
  { name: "Founder 3", role: "COO", photo: "/images/founder3.jpg" },
  { name: "Founder 4", role: "CFO", photo: "/images/founder4.jpg" },
  { name: "Founder 5", role: "CMO", photo: "/images/founder5.jpg" },
  { name: "Founder 6", role: "VP of Sales", photo: "/images/founder6.jpg" },
  { name: "Founder 7", role: "VP of Marketing", photo: "/images/founder7.jpg" },
  {
    name: "Founder 8",
    role: "VP of Engineering",
    photo: "/images/founder8.jpg",
  },
];

const styles = {
  container: {
    padding: "20px 80px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    lineHeight: "1.8",
  },
  headline: {
    fontSize: "44px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
    color: "#333",
  },
  introText: {
    fontSize: "16px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 60px",
    color: "#555",
  },
  section: {
    marginBottom: "60px",
    textAlign: "center",
  },
  flexSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "80px",
    padding: "0 20px",
  },
  textContainer: {
    flex: 1,
    marginRight: "20px",
    padding: "20px",
  },
  imageContainer: {
    flex: 1,
    marginLeft: "20px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  subheading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#0070f3",
  },
  paragraph: {
    fontSize: "10px",
    color: "#444",
    lineHeight: "1.7",
  },
  list: {
    fontSize: "14px",
    color: "#444",
    textAlign: "left",
    marginLeft: "20px",
    lineHeight: "1.7",
  },
  closingSection: {
    width: "100%",
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    padding: "60px 20px",
    boxSizing: "border-box",
  },
  closingContent: {
    maxWidth: "1200px",
    textAlign: "center",
    padding: "0 20px",
  },
  ctaButton: {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "15px 30px",
    fontSize: "14px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  foundersSection: {
    padding: "60px 20px",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },
  foundersGrid: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  founderCard: {
    width: "20%",
    margin: "20px",
    textAlign: "center",
  },
  founderImage: {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  founderName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0070f3",
  },
  founderRole: {
    fontSize: "12px",
    color: "#333",
  },
};

export default AboutUs;
