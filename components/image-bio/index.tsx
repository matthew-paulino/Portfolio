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
        Whether you&apos;re a large company, small business or need help with a
        personal website I&apos;m here for you. Check out some of my projects
        below. Let&apos;s get in touch!
      </h3>

      <h3>
        <Link href="/skill-set">
          <span className={styles.underline}>Touch</span>
        </Link>
      </h3>
    </div>
  );
};
