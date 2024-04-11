import { FunctionComponent, ReactElement } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import styles from "./PageWrapper.module.scss";

interface PageWrapperProps {
  children?: ReactElement[] | ReactElement;
}

export const PageWrapper: FunctionComponent<PageWrapperProps> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
      <Footer />
    </>
  );
};
