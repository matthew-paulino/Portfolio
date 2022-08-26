import Image from "next-image-export-optimizer";
import styles from "./matthew-paulino.module.css";
import Head from "next/head";

export default function PennysPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matthew Paulino</title>
      </Head>
      <div className={styles.box}>
        <div className={styles["box-text"]}>
          <h1>Matthew Paulino</h1>

          <h2>Web Developer Portfolio</h2>

          <h3 className={styles.textColor}>UI & UX Design, Web Development</h3>
          <h3>
            ReactJs, HTML, CSS, JavaScript/JSX, React Hooks, NodeJS, NextJS,
            TypeScript
          </h3>

          <h3>
            <a
              className={styles.textUnderline}
              href="/matthew-paulino"
              target="_blank"
              rel="noreferrer"
            >
              https://matthewpaulino.tech
            </a>
          </h3>
          <h3>
            <a
              className={styles.textUnderline}
              href="https://github.com/matthew-paulino/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com
            </a>
          </h3>
        </div>
      </div>

      <div className={styles.textUnderline1}></div>

      <div>
        <h1>Summary</h1>
        <p>
          The Mattew Paulino website was built to be a personal portfolio. It
          was crafted to streamline the addition of new projects without heavy
          code changes. New projects are added, looped through an array and
          dynamically adjusted in size and shape to match the UI and UX.
        </p>
        <p>
          The site was built leveraging Module CSS, React Hooks and Component
          State Management. Next JS is used for easy dev experience, performance
          and image optimization, and TypeScript to easily catch errors and
          strongly type code.
        </p>
        <p>The site is hosted on Netlify and source controlled by Github.</p>
      </div>
      <div className={styles.textUnderline2}></div>

      <div className={styles.photoBox}>
        {/* style={{ position: "relative", boxShadow: "0px 0px 20px 5px #888888" }}
       > */}
        <Image
          src={"/img/Penny-Approach.png"}
          alt=""
          layout="intrinsic"
          width="1396"
          height="1015"
        />
      </div>

      <div className={styles.textUnderline2}></div>

      <div className={styles.photoBox}>
        <Image
          src={"/img/Penny-CMS.png"}
          alt=""
          layout="intrinsic"
          width="1268"
          height="887"
        />
      </div>
    </div>
  );
}
