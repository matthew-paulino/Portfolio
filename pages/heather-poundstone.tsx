import Image from "next-image-export-optimizer";
import styles from "./heather-poundstone.module.css";
import Head from "next/head";

export default function PennysPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heather Poundstone</title>
      </Head>
      <div className={styles.box}>
        <div className={styles["box-text"]}>
          <h1>Heather Poundstone</h1>

          <h2>Blogging Website</h2>

          <h3 className={styles.textColor}>UI & UX Design, Web Development</h3>
          <h3>
            ReactJs, HTML, CSS, JavaScript/JSX, React Hooks, NodeJS, NextJS,
            TypeScript, Netlify CMS
          </h3>

          <h3>
            <a
              className={styles.textUnderline}
              href="https://heatherpoundstone.com"
              target="_blank"
              rel="noreferrer"
            >
              https://heatherpoundstone.com
            </a>
          </h3>
        </div>
      </div>

      <div className={styles.textUnderline1}></div>

      <div>
        <h1>Summary</h1>
        <p>
          The Heather Poundstone website was built with two primary goals in
          mind. First, a blogging site that addresses and elaborates on issues
          important to the client. Second, a site that is easy to update.
        </p>
        <p>
          The former was done by building-out a blog that is efficiently
          categorized and stream lines the user experience. Some notables were
          leveraging Module CSS, React Hooks and Component State Management. The
          later was accomplished using tools such as Netlify CMS to allow the
          client to manage the content, Next JS for easy dev experience,
          performance and image optimization, and lastly TypeScript to easily
          catch errors and strongly type code.
        </p>
        <p>The site is hosted on Netlify and source controled by Github.</p>
      </div>
      <div className={styles.textUnderline2}></div>

      <div className={styles.photoBox}>
        {/* style={{ position: "relative", boxShadow: "0px 0px 20px 5px #888888" }}
       > */}
        <Image
          src={"/img/heather-detail.png"}
          alt=""
          layout="intrinsic"
          width="1920"
          height="2715"
        />
      </div>

      <div className={styles.textUnderline2}></div>

      <div className={styles.photoBox}>
        <Image
          src={"/img/heather-post.png"}
          alt=""
          layout="intrinsic"
          width="1920"
          height="1192"
        />
      </div>
    </div>
  );
}
