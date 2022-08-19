import Image from "next-image-export-optimizer";
import styles from "./pokemon-project.module.css";
import Head from "next/head";

export default function SkillSet() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon</title>
      </Head>
      <div className={styles.box}>
        <div className={styles["box-text"]}>
          <h1 style={{ textAlign: "center" }}>Poke Game</h1>

          <h2>Lawyer Services Website</h2>

          <h3 className={styles.textColor}>UI & UX Design, Web Development</h3>
          <h3>
            ReactJs, HTML, CSS, JavaScript/JSX, React Hooks, NodeJS, NextJS,
            TypeScript, Netlify CMS
          </h3>

          <h3>
            <a
              className={styles.textUnderline}
              href="/pokemon-project"
              target="_blank"
              rel="noreferrer"
            >
              https://pokegame.com
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
          src={"/img/Pokedex.png"}
          alt=""
          layout="intrinsic"
          // width="1920"
          // height="967"
          width="1735"
          height="1000"
        />
      </div>
    </div>
  );
}

// 1920
// 976

// 1735
// 1000
