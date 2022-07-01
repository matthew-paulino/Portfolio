import styles from "./header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <h1>
        <Link href="/skill-set">Skill Set</Link>
      </h1>
    </div>
  );
};
