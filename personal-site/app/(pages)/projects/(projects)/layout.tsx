import Link from "next/link";
import styles from "@/app/page.module.css";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.projectPage}>
      <Link href="/projects" className={styles.subtle}>
        ‹ back to projects
      </Link>
      {children}
    </div>
  );
}
