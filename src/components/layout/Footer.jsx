import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import SocialLink from "../ui/SocialLink";

const socialPlatforms = [
  {
    href: "https://facebook.com/rottentomatoes",
    platform: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://twitter.com/rottentomatoes",
    platform: "Twitter",
    Icon: FaTwitter,
  },
  {
    href: "https://instagram.com/rottentomatoes",
    platform: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://youtube.com/rottentomatoes",
    platform: "YouTube",
    Icon: FaYoutube,
  },
];

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        {/* Left Links */}
        <nav aria-label="Footer navigation 1" className="footer-links">
          <a href="#">Help</a>
          <a href="#">About Rotten Tomatoes</a>
        </nav>

        <nav aria-label="Footer navigation 2" className="footer-links">
          <a href="#">Critic Submission</a>
          <a href="#">Licensing</a>
          <a href="#">Advertise With Us</a>
          <a href="#">Careers</a>
        </nav>

        {/* Newsletter */}
        <section className="newsletter" aria-labelledby="newsletter-heading">
          <div className="newsletter-header">
            <FaEnvelope aria-hidden="true" />
            <h2 id="newsletter-heading">Join the Newsletter</h2>
          </div>

          <p>
            Get the freshest reviews, news, and more delivered right to your
            inbox!
          </p>

          <button className="newsletter-btn">Join the Newsletter</button>
        </section>

        {/* Social */}
        <section className="social-section" aria-labelledby="follow-heading">
          <h2 id="follow-heading">Follow Us</h2>

          <div className="social-links">
            {socialPlatforms.map((social) => (
              <SocialLink key={social.platform} {...social} />
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Links */}
      <div className="footer-bottom">
        <nav aria-label="Legal links" className="legal-links">
          <a href="#">Ad Choices</a>
          <span aria-hidden="true">|</span>
          <a href="#">Privacy Policy</a>
          <span aria-hidden="true">|</span>
          <a href="#">Cookie Notice</a>
          <span aria-hidden="true">|</span>
          <a href="#">CA Notice</a>
          <span aria-hidden="true">|</span>
          <a href="#">Terms and Policies</a>
          <span aria-hidden="true">|</span>
          <a href="#">Accessibility</a>
        </nav>

        <p className="copyright">
          © Fandango. A Versant Media company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
