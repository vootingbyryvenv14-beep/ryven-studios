import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Saya Ryven Akmal A., seorang web developer dari Pacitan yang terus
          belajar dan berkembang dalam membangun pengalaman digital. Saya
          tertarik pada pengembangan website, UI/UX, database, serta pemanfaatan
          teknologi AI sebagai alat bantu berkarya.
        </p>
        <p className="para" style={{ fontSize: "clamp(18px, 1.4vw, 24px)", lineHeight: 1.5, marginTop: "24px", color: "var(--accentColor)" }}>
          “Semua itu butuh proses. Terus belajar, terus berkarya, dan biarkan
          hasil berbicara.”
        </p>
      </div>
    </div>
  );
};

export default About;
