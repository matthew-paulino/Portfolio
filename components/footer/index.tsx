import styles from "./footer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const Footer = () => {
  // if we're on home page, remove class border top
  // step 1. Determine if we're are on home page or not
  const router = useRouter();
  console.log(router);
  // step 2. Use the above determination to toggle useage of borderTop class
  let isHomepage = router.pathname === "/";
  // let isHomepage = false;
  // if (router.pathname === "/") {
  //   isHomepage = true;
  // }

  // let borderStyle = styles.borderTop;
  // if(isHomepage) {
  //   borderStyle = null;
  // }

  return (
    <footer className={isHomepage === true ? null : styles.borderTop}>
      <div className={styles.footerContainer}>
        <div className={styles.copyRight}>
          <Link href="/">Copyright 2022 Matthew Paulino Technology</Link>
        </div>
      </div>
    </footer>
  );
};

//copyright symbol
