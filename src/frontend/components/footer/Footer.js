import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p>Connect With Me @unifts</p>
        <div className="footer-icons">
          <a href="https://www.instagram.com/unifts/">
            <FontAwesomeIcon icon={faInstagram} shake />
          </a>
          <a href="https://github.com/unifts">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/unifts/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/unifts">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </>
  );
};
