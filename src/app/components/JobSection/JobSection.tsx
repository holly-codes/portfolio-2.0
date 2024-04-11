import { FunctionComponent } from "react";
import type { TypeJobSkeleton } from "../../../../types/contentful";
import styles from "./JobSection.module.scss";
import { Job } from "../Job/Job";

interface JobSectionProps {
  jobs: TypeJobSkeleton[];
}
export const JobSection: FunctionComponent<JobSectionProps> = ({ jobs }) => {
  return (
    <div className={styles.jobSection}>
      {jobs.map((job) => (
        <Job job={job} key={job.fields.companyName?.values} />
      ))}
    </div>
  );
};
