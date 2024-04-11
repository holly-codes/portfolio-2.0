import styles from "./page.module.css";
import { NavigationSidebar } from "./components/NavigationSidebar/NavigationSidebar";
import { MainContent } from "./components/MainContent/MainContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationSidebar />
      <MainContent />
    </main>
  );
}
