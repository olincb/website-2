import Image from "next/image";
import styles from "@/app/page.module.css";
import { Group, Button, Text } from "@mantine/core";

type HomeButtonProps = {
  href: string;
  text: string;
};
function HomeButton(props: HomeButtonProps) {
  return (
    <Button
      variant="transparent"
      component="a"
      href={props.href}
      h="100"
      w="180"
      classNames={{
        inner: styles.homeButtonText,
      }}
    >
      {props.text}
    </Button>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Christopher Baillie Olin</h1>
        <Text>
          Welcome to my website! Here, you can learn more about me, see my
          resume, see some projects I&apos;ve worked on, and read my blog about
          my travels.
        </Text>
        <Group justify="space-between">
          <HomeButton href="/about" text="about me" />
          <HomeButton href="/resume" text="resume" />
          <HomeButton href="/projects" text="projects" />
          {/*<HomeButton href="/blog" text="blog" />*/}
          {/*<HomeButton href="/art" text="art" />*/}
        </Group>
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
