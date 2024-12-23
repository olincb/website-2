import styles from "@/app/page.module.css";
import { Title, Text } from "@mantine/core";
// This template should be used for all pages that are not the home page.
export default function TemplateLayout({ children }) {
  return (
    <div>
      <Title order={2}>
        <a href="/">Christopher Baillie Olin</a>
      </Title>
      <div className={styles.page}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
