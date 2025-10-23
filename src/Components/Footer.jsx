import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="#about" className="link link-hover">
          About
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
        <a href="#privacy" className="link link-hover">
          Privacy Policy
        </a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterestP />
          </a>
        </div>
      </nav>

      <aside>
        <p>© 2025 GreenNest. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
