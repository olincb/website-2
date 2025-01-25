import styles from "@/app/page.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.projectPage}>
      <a href='/projects' className={styles.subtle}>‹ back to projects</a>
      {children}
    </div>
  );
}
