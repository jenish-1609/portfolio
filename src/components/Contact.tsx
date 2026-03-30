import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/jenish-akoliya-9a3a96229"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — jenish-akoliya
              </a>
            </p>
            <p>
              <a href="mailto:jenish.akoliya09@gmail.com" data-cursor="disable">
                Email — jenish.akoliya09@gmail.com
              </a>
            </p>
            <p>Phone — 669-231-9417</p>
            <p>Location — San Jose, CA</p>
            <h4>Education</h4>
            <p>
              Master of Science in Computer Engineering, San Jose State
              University — 2025–2027
            </p>
            <p>
              Bachelor of Engineering in Information Technology, A.D. Patel
              Institute of Technology — 2020–2024
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/jenish-akoliya-9a3a96229"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Jenish Akoliya</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
