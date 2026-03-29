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
                href="mailto:shashwatchaturvedi7011@gmail.com"
                data-cursor="disable"
              >
                Email — shashwatchaturvedi7011@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/shashwat-chaturvedi-a840a4353/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — shashwat-chaturvedi-a840a4353
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science (AI & ML), SRM Institute of Science and
              Technology — 2024–2028
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Victorralph7011"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shashwat-chaturvedi-a840a4353/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/shashwat7011/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shashwat Chaturvedi</span>
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
