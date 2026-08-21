import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Software Engineering</p>

        <h1 className={styles.title}>
          Hi, I&apos;m Benjamín Ragnarsson.
        </h1>

        <p className={styles.description}>
          Software Engineering BSc candidate based in Reykjavík, Iceland.
          I build backend and full-stack applications using technologies
          including .NET, TypeScript, Python, REST APIs, Docker and
          microservices.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            View my projects
          </a>

          <a
            href="https://github.com/Benjarag"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}