import React from "react";
import "../../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <hr />
      <div className="page-wrapper"></div>
      <footer>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h1 className="logo-text">
                <span className="logo-span">J</span>unaid &nbsp;
                <span className="logo-span">Q</span>ureshi
              </h1>
              <p className="footer-para">
                I am a creative, Web Developer with command on Latest Tech
                stacks
              </p>
              <div className="contact">
                <span>
                  <i className="fas fa-envelope"></i>&nbsp; qjunaid623@gmail.com
                </span>
              </div>
              <div className="socials">
                <a
                  href="https://www.facebook.com/profile.php?id=100041078220896"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/junaid-qureshi-34a180194/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com/Junaid084869/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/developer-junaid"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">&copy; | Designed By Junaid Qureshi</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
