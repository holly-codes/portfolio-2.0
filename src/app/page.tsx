import styles from "./page.module.css";
import { NavigationSidebar } from "./components/NavigationSidebar/NavigationSidebar";
import { MainContent } from "./components/MainContent/MainContent";
import { PageWrapper } from "./components/PageWrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <PageWrapper>
        <NavigationSidebar />
        <MainContent />
      </PageWrapper>
    </main>
  );
}
