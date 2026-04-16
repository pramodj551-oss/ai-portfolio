export default function Hero() {
  return (
    <section style={{ padding: "80px", textAlign: "center" }}>
      
      <h1 style={{ fontSize: "42px" }}>
        Pramod Jadhav
      </h1>

      <h2 style={{ color: "#38bdf8" }}>
        Frontend Developer | AI/ML Enthusiast
      </h2>

      <p style={{ maxWidth: "600px", margin: "20px auto", color: "#cbd5f5" }}>
        12+ years of experience in security operations, now transitioning into AI/ML. 
        I build intelligent applications using pattern recognition and anomaly detection concepts.
      </p>

      <div style={{ marginTop: "20px" }}>
        <a href="/resume.pdf" target="_blank">
          <button style={{ marginRight: "10px" }}>Resume</button>
        </a>

        <a href="#projects">
          <button>View Projects</button>
        </a>
      </div>

    </section>
  );
      }
