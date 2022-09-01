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
          <h1>PokeGame</h1>

          <h2>Poke Card Game</h2>

          <h3 className={styles.textColor}>
            UI & UX Implementation, Web Application
          </h3>
          <h3>ReactJs, HTML, CSS, JavaScript/JSX, NodeJS</h3>

          <h3>
            <a
              className={styles.textUnderline}
              href="https://pokegameproject.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://pokegameproject.netlify.app
            </a>
          </h3>
          <h3>
            <a
              className={styles.textUnderline}
              href="https://github.com/matthew-paulino/Pokemon_Project"
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
          The PokeGame is built to show a single set of Poke Cards. The set is
          split in half and randomly assigned into two hands. It then calculates
          the total experience for each hand and determines a winner.
        </p>
        <p>
          The card set was created using three components. It shows a single
          Pokemon, with their name, image, and type. It is provided, via props,
          an array of objects describing different pokemon, and renders a series
          of Poke Card React components.
        </p>
        <p>The site is hosted on Netlify and source controlled by Github.</p>
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
