import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Christopher Baillie Olin</h1>
        <p>Welcome to my website! Here, you can learn more about me,
          see my resume, see some projects I&apos;ve worked on,
          and read my blog about my travels.</p>
        <p>This site is under construction, please excuse any incompleteness.</p>
        
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/olincb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/christopher-olin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
