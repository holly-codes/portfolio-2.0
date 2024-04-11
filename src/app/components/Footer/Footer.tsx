import { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footerContainer}>
      <div
        className={styles.copyright}
      >{`© ${new Date().getFullYear()} Holly Burinda`}</div>
      <div className={styles.footerLinks}>
        <ul>
          <li>
            <a href="https://github.com/holly-codes/">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/holly-codes">
              <i className="fa-brands fa-codepen"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/holly-burinda-33950964">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="mailto:hello@holly-codes.com">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
