import { FunctionComponent } from "react";
import styles from "./HomeMarquee.module.scss";
import Link from "next/link";

export const HomeMarquee: FunctionComponent = () => {
  return (
    <div className={styles.homeMainContent}>
      <h1>{"Hi! 👋🏻 I'm Holly."}</h1>
      <h2>{"I'm a frontend software engineer."}</h2>
      <p>
        {
          "I implement smooth, usable, accessible user experiences using React, TypeScript, and CSS3, among other technologies."
        }
      </p>
      <div className={styles.linkButtons}>
        <Link
          className={styles.primaryButton}
          href="mailto:hello@holly-codes.com"
        >
          {"Let's chat"}
        </Link>
        <Link className={styles.secondaryButton} href="experience-projects/">
          {"See my projects"}
        </Link>
      </div>
    </div>
  );
};
