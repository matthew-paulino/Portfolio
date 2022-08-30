import styles from "./image-bio.module.css";
import Link from "next/link";

export const ImageBio = () => {
  return (
    <div className={styles.alignment}>
      <h1>
        I’m Matthew, a full stack developer. I build clean, self-sustaining and
        forward-thinking web applications.
      </h1>
      <h3>
        Weather your a large company, small business or need help with a
        personal website I'm here to help. Check out some of my projects below.
        Let's get in touch!
      </h3>

      <h3>
        <Link href="/skill-set">
          <span className={styles.underline}>Touch</span>
        </Link>
      </h3>
    </div>
  );
};
