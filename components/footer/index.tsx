import styles from "./footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.copyRight}>
        <Link href="/">Copyright 2022 Matthew Paulino Technology</Link>
      </div>
    </footer>
  );
};

//copyright symbol
