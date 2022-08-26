import styles from "./header.module.css";
import Link from "next/link";
import { IoHome } from "react-icons/Io5";
import { FaLaptopCode } from "react-icons/Fa";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      {/* <div className={styles.alignment}> */}
      <div className={`${styles.navLeft} ${styles.icon}`}>
        <Link href="/">
          <IoHome />
        </Link>
      </div>
      <div className={styles.navRight}>
        <Link href="/skill-set">Skill Set</Link>
      </div>
      {/* </div> */}
    </header>
  );
};
