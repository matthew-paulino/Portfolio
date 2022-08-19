import styles from "./header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navLeft}>
        <Link href="/">Home</Link>
      </div>
      <div className={styles.navRight}>
        <Link href="/skill-set">Skill Set</Link>
      </div>
    </header>
  );
};
