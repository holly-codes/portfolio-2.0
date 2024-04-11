import Image from "next/image";
import styles from "./about.module.scss";
import Link from "next/link";
import { PageWrapper } from "../components/PageWrapper";

export default function About() {
  return (
    <main className={styles.main}>
      <PageWrapper>
        <div className={styles.aboutContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/me.jpg"
              alt="A picture of Holly, wearing a purple bridesmaid dress and smiling"
              width="250"
              height="250"
            />
          </div>
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
                "I graduated with a bachelor's in Computer Science in 2012 from the University of New Haven. I started my career working on Lotus Notes applications, using LotusScript (basically VB6 with some custom libraries on top) and have worked my way up to now working on Sitecore sites. I've worked on some pretty snazzy sites, which you can see over on my "
              }
              <Link href="experience-projects/">Experience & Projects</Link>
              {
                " page. I started my career as a backend developer by trade, then spent the better part of 5 years learning more frontend skills on my own and then pivoted to be a fullstack developer. Now, I spend my days working in a frontend engineer role at Trello, and I absolutely love the new challenges that this role brings. I've spent the last 2 years professionally growing, keeping my skills honed, so that I can build the best possible products with the best possible experiences."
              }
            </p>
            <h2>{"What am I learning?"}</h2>
            <p>
              {
                "Well, right now, I'm learning *gestures broadly at this site* this. This site uses HTML, SASS, Flexbox, GraphQL, and NextJS (and by extension, ReactJS)."
              }
            </p>

            <p>
              {
                "This site is a placeholder, and I'm currently redoing the design (and code!) to be more in line with my current skillset. Keep an eye out for an updated design and updated code stack! Specifically, since this site is a couple of years old, I will be rewriting this in TypeScript, will make use of React hooks and better use of functional components, and will be modernizing the CSS."
              }
            </p>

            <p>
              {"My pet projects live over on the "}
              <Link href="experience-projects/">Experience & Projects</Link>
              {
                " page, go check them out to see the random things I've done to practice my skills!"
              }
            </p>
            <h2>{"What else should you know about me?"}</h2>
            <p>
              {
                "I'm always looking to build cool stuff. I'm constantly learning and working to better myself, and I have a passion for building cool stuff that is easy to use. If you think my skills and experience would be a fit for you, "
              }
              <Link href="mailto:hello@holly-codes.com">email me</Link>
              {" and let's chat!"}
            </p>
          </div>
        </div>
      </PageWrapper>
    </main>
  );
}
