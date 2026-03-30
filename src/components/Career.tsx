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
                <h4>Software Developer Intern</h4>
                <h5>CIFS Code</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Built TaskFlow AI, an agent-based workflow automation platform
              using FastAPI, Node.js, AWS, and OpenAI APIs. Developed RESTful
              services, webhook-driven automation, and distributed orchestration
              features for developer productivity workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>CIFS Code</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed an AI-powered blogging platform with the MERN stack and
              GPT integration, supporting secure authentication, editable
              generated content, image upload workflows, and AWS deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Niqox Tech</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built admin dashboard features for Sourcezee, including onboarding
              flows, product management, role-based authentication, and vendor
              verification workflows for a large user base.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
