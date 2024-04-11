import { FunctionComponent } from "react";
import styles from './NavigationSidebar.module.scss';

export const NavigationSidebar: FunctionComponent = () => {
    return (
        <div className={styles.navSidebarContainer}>
            <div className={styles.introduction}>
                <h1 className={styles.nameHeading}>Holly Burinda</h1>
                <h2 className={styles.jobTitle}>Frontend Engineer</h2>
                <p className={styles.blurb}>I create robust, smooth, accessible web experiences.</p>
            </div>
        </div>
    );
};