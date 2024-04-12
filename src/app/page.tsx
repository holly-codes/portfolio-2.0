import styles from "./page.module.scss";
import { HomeMarquee } from "./components/HomeMarquee";
import { Header } from "./components/Header";
import { HomeImage } from "./components/HomeImage";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.contentContainer}>
        <HomeMarquee />
        <HomeImage />
      </div>
    </main>
  );
}
