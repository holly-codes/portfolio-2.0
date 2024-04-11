import { FunctionComponent } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Header: FunctionComponent = () => {
  return (
    <div className={styles.headerContainer}>
      <Image
        src="/images/logo-larger.png"
        alt="Logo with hand drawn lavender sprig and initials H B, surrounded by a circle"
        style={{ objectFit: "none" }}
        fill
      />
      <div className={styles.navigationLinks}>
        <ul>
          <li>
            <Link href="about/">About</Link>
          </li>
          <li>
            <Link href="projects/">Projects</Link>
          </li>
          <li>
            <Link href="resume/">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
