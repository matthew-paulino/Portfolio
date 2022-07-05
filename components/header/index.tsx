import styles from "./header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.alignment}>
      <h3>
        <Link href="/skill-set">Skill Set</Link>
      </h3>
    </div>
  );
};
