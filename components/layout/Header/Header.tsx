export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <a href="#top" className="brand">
          benjarag.dev
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </nav>

        <div className="language-switch" aria-label="Language">
          <span>IS</span>
          <span className="language-divider">/</span>
          <strong>EN</strong>
        </div>
      </div>
    </header>
  );
}
