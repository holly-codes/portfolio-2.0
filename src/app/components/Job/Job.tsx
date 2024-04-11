import { FunctionComponent } from "react";
import type { TypeJobSkeleton } from "../../../../types/contentful";
import styles from "./Job.module.scss";

interface JobProps {
  job: TypeJobSkeleton;
}
export const Job: FunctionComponent<JobProps> = ({ job }) => {
  const jobData = job.fields;

  return (
    <div>
      <div className={styles.jobCard}>
        {jobData.companyName && (
          <h3 className={styles.companyName}>{jobData.companyName.values}</h3>
        )}
        <p>
          {jobData.jobTitle && (
            <strong className={styles.jobTitle}>
              {jobData.jobTitle.values}
            </strong>
          )}
          {jobData.timeSpan && (
            <em className={styles.datesOfEmployment}>
              {jobData.timeSpan.values}
            </em>
          )}
        </p>
        {/* {jobData.contentSections?.map((section) => (
          <JobContentSection key={section.sectionName} section={section} />
        ))} */}
      </div>
    </div>
  );
};
