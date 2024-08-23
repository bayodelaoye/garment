import "./Footer.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer-container">
      <p>Bayode Olaoye © 2024</p>
      <div className="github-linkedin-footer">
        <Link to="https://github.com/bayodelaoye" target="_blank">
          <FaGithub className="footer-icon" />
        </Link>
        <Link to="https://www.linkedin.com/in/bayode-olaoye/" target="_blank">
          <FaLinkedin className="footer-icon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
