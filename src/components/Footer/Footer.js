import React from "react";
import "../../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <hr />
      <div class="page-wrapper"></div>
      <footer>
        <div class="footer">
          <div class="footer-content">
            <div class="footer-section about">
              <h1 class="logo-text">
                <span class="logo-span">J</span>unaid &nbsp;
                <span class="logo-span">Q</span>ureshi
              </h1>
              <p class="footer-para">
                I am a creative, Web Developer with command on Latest Tech
                stacks
              </p>
              <div class="contact">
                <span>
                  <i class="fas fa-envelope"></i>&nbsp; qjunaid623@gmail.com
                </span>
              </div>
              <div class="socials">
                <a
                  href="https://www.facebook.com/profile.php?id=100041078220896"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/junaid-qureshi-34a180194/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com/Junaid084869/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/developer-junaid"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">&copy; | Designed By Junaid Qureshi</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
