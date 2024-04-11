import { FunctionComponent, ReactElement } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface PageWrapperProps {
  children?: ReactElement[] | ReactElement;
}

export const PageWrapper: FunctionComponent<PageWrapperProps> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
