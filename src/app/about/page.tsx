import Image from "next/image";
import styles from "./about.module.scss";
import { PageWrapper } from "../components/PageWrapper";

export default function About() {
  return (
    <main className={styles.main}>
      <PageWrapper>
        <div className={styles.aboutContainer}>
          <div className={styles.statsContainer}>
            <h1>{"Hi, I'm Holly!"}</h1>
            <p>
              {
                "I'm guessing that if you're here, you already knew that though."
              }
            </p>
            <h2>{"I'm a frontend software engineer"}</h2>
            <p>
              {
                "I graduated with a bachelor's in Computer Science in 2012 from the University of New Haven. I started my career working on Lotus Notes applications, using LotusScript (basically VB6 with some custom libraries on top) and have worked my way up to now working on Sitecore sites. I've worked on some pretty snazzy sites, which you can see over on my Experience & Projects page. I started my career as a backend developer by trade, then spent the better part of 5 years learning more frontend skills on my own and then pivoted to be a fullstack developer. Now, I spend my days working in a frontend engineer role at Trello, and I absolutely love the new challenges that this role brings. I've spent the last 2 years professionally growing, keeping my skills honed, so that I can build the best possible products with the best possible experiences."
              }
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/me.jpg"
              alt="A picture of Holly, wearing a purple bridesmaid dress and smiling"
              fill
              style={{ objectFit: "none" }}
            />
          </div>
        </div>
      </PageWrapper>
    </main>
  );
}
