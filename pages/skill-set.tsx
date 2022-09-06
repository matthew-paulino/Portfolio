import Image from "next-image-export-optimizer";
import styles from "./skill-set.module.css";
import Head from "next/head";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function SkillSet() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skill Set</title>
      </Head>

      <div>
        <h2 style={{ textAlign: "center" }}>Full Stack Web Development</h2>
      </div>

      <div className={styles.wrapper}>
        {/* 1x1 */}
        <div className={`${styles.one} ${styles.cells}`}>
          <ul>
            {/* Languages */}
            <h4>Languages</h4>
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML5</li>
            <li>Cascading Style Sheets</li>

            <p></p>
            {/* Frameworks */}
            <p></p>
            <h4>Frameworks</h4>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>Express.js</li>
            <p></p>

            <p></p>
            {/* Databases / Database frameworks */}
          </ul>
          <p></p>
        </div>
        {/* 1x2 */}
        <div className={`${styles.two}  ${styles.cells}`}>
          {/* <div className={styles.textWhite}> */}
          <ul>
            <h4>Databases</h4>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Sequelize.js</li>
            <li>Mongoose ODM</li>
            <h4>Content Management Systems</h4>
            <li>WordPress</li>
            <li>Netlify CMS</li>
            <p></p>
            <h4>Concepts</h4>
            <li>Git</li>
            <li>Github</li>
            <li>JSON Web Token</li>
            <li>REST API</li>
          </ul>
        </div>
        {/* </div> */}
        {/* 1x3 */}
        <div className={`${styles.three}  `}>
          <div className={`${styles.cells} ${styles.contactBox}`}>
            <h1>Contact</h1>
            <form
              action="https://formsubmit.co/a5eee46669327d610d744d2465c13d69"
              method="POST"
            >
              <div>
                <input placeholder="Name" type="text" name="name" required />
              </div>
              <div>
                <input placeholder="Email" type="email" name="email" required />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  rows={6}
                />
              </div>
              <div>
                <button className={styles.styledButton} type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* 1x3 */}
        <div className={`${styles.four}  ${styles.cells} ${styles.centerIcon}`}>
          <Link href={"https://www.linkedin.com/in/matthew-paulino/"}>
            <FaLinkedin />
          </Link>
          <Link href={"https://github.com/matthew-paulino"}>
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}

// react icons - npm pakage - penny's site
