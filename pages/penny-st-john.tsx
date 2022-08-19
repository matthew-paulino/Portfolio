import Image from "next-image-export-optimizer";
import styles from "./penny-st-john.module.css";
import Head from "next/head";

export default function PennysPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Penny St. John</title>
      </Head>
      <div className={styles.box}>
        <div className={styles["box-text"]}>
          <h1>Penny St. John</h1>

          <h2>Lawyer Services Website</h2>

          <h3 className={styles.textColor}>UI & UX Design, Web Development</h3>
          <h3>
            ReactJs, HTML, CSS, JavaScript/JSX, React Hooks, NodeJS, NextJS,
            TypeScript, Netlify CMS
          </h3>

          <h3>
            <a
              className={styles.textUnderline}
              href="https://pennystjohn.com"
              target="_blank"
              rel="noreferrer"
            >
              https://pennystjohn.com
            </a>
          </h3>
        </div>
      </div>

      <div className={styles.textUnderline1}></div>

      <div>
        <h1>Summary</h1>
        <p>
          The Penny St. John website was built with two primary goals in mind.
          First, to have a strong and professional appeal to the visitor that
          quickly directs them to the client. Second, to create a
          self-sustaining website that is user friendly for the client.
        </p>
        <p>
          The former was done in collaboration with the client to help achieve
          their personal vision. Some notables in building-out the UI and UX
          were leveraging Module CSS, React Hooks and Component State
          Management. The later was accomplished using tools such as Netlify CMS
          to allow the client to manage the content, Next JS for easy dev
          experience, performance and image optimization, and lastly TypeScript
          to easily catch errors and strongly type code.
        </p>
        <p>The site is hosted on Netlify and source controled by Github.</p>
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

// -- delete some
// fill out page
// link that say home or logo to go back home
// screen shots

// add link to home page in header (Home or link)
// screen shots/images
// skill-set page
// touch up home page
// icons to link stuff

// more projects to home page
