import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Borium</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting the MVP and defining the technical roadmap for
              early-stage digital transformation tools. Spearheading ResQNav for
              smart traffic management and emergency response. Managing
              end-to-end product development lifecycles, bridging the gap between
              high-level startup vision and functional technical execution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Security Virtual Intern</h4>
                <h5>Zscaler</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Aug 2025 — Oct 2025. Gained practical experience in cloud security
              architectures and applied Zero Trust principles to real-world
              enterprise security scenarios.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Virtual Intern</h4>
                <h5>Google</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Apr 2025 — June 2025. Explored foundational AI/ML concepts and
              their application in solving real-world data problems through
              hands-on projects and mentorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
