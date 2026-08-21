import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span>© 2026 benjarag.dev</span>
          <span className="footer-divider">|</span>
          <span>Reykjavík, Iceland</span>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/Benjarag"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a href="mailto:benjarag7@outlook.com">
            <Mail size={18} />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}