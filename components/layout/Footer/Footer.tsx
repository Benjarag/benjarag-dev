import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { contactLinks } from "@/data/contact";
import type { Dictionary } from "@/i18n/types";

type FooterProps = {
  content: Dictionary["footer"];
};

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span>© 2026 benjarag.dev</span>
          <span className="footer-divider">|</span>
          <span>{content.location}</span>
        </div>

        <div className="footer-links">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
            {content.github}
          </a>

          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} />
            {content.linkedin}
          </a>

          <a href={contactLinks.email}>
            <Mail size={18} />
            {content.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
