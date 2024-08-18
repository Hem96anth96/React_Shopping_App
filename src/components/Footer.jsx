import React from "react";
import "./Footer.css";

const SwagLabsFooter = () => {
  return (
    <footer className="footer" data-test="footer">
      {/* <div className="footer_container"> */}
      <ul className="social">
        <li className="social_twitter">
          <a
            href="https://en.wikipedia.org/wiki/Family_Guy"
            target="_blank"
            rel="noreferrer"
            data-test="social-twitter"
          >
            Twitter
          </a>
        </li>
        <li className="social_facebook">
          <a
            href="https://en.wikipedia.org/wiki/Family_Guy"
            target="_blank"
            rel="noreferrer"
            data-test="social-facebook"
          >
            Facebook
          </a>
        </li>
        <li className="social_linkedin">
          <a
            href="https://en.wikipedia.org/wiki/Family_Guy"
            target="_blank"
            rel="noreferrer"
            data-test="social-linkedin"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <div className="footer_copy" data-test="footer-copy">
        &copy; {new Date().getFullYear()} Rhode Island. All Wrongs Deserved. 
      </div>
      {/* </div> */}
    </footer>
  );
};

export default SwagLabsFooter;
