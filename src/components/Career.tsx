import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My learning <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <h5>Learning by Building</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Terus mengembangkan kemampuan dalam HTML, CSS, JavaScript, React,
              PHP, database, dan UI/UX Design melalui proses belajar serta
              pengerjaan proyek.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Exploration</h4>
                <h5>RYVEN STUDIOS</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Membangun identitas kreatif dan mengembangkan ide menjadi karya
              digital. Setiap proyek menjadi kesempatan untuk mencoba,
              mengevaluasi, dan meningkatkan kemampuan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
