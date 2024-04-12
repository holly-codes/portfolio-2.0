import { FunctionComponent } from "react";
import styles from "./HomeImage.module.scss";

export const HomeImage: FunctionComponent = () => {
  return (
    <svg viewBox="0 0 325 325" className={styles.homeImage}>
      <defs>
        <clipPath id="shape">
          <path
            fill="none"
            d="M276.8,56.9c23.5,25.9,33.9,61.3,53.7,95.3c19.8,33.9,49,66.4,57.3,104.6c8.2,38.2-4.5,82.3-35.2,102.2
	c-30.6,20-79.2,15.8-121.3,23.7c-42.1,7.8-77.8,27.6-118.6,31.1c-40.9,3.5-86.9-9.3-99.3-41.4c-12.3-32.1,8.9-83.4,8.9-127.5
	c0-44.2-21.1-81.2-22.3-121.6C-1.1,82.9,17.9,39,51.2,17.6C84.6-3.9,132.3-2.9,174.5,5.8S253.3,30.9,276.8,56.9z"
          />
        </clipPath>
      </defs>
      <image
        width="400"
        height="400"
        clipPath="url(#shape)"
        xlinkHref="/images/me-home.jpg"
        x="-50"
        y="-50"
      ></image>
    </svg>
  );
};
