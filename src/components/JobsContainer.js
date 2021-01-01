import React from "react";
import Job from "./Job";

const JobsContainer = ({
  jobs,
  updateJobsLevel,
  updateJobsRole,
  updateJobsLanguages,
  updateJobsTools,
}) => {
  return (
    <section className="jobs-container">
      {jobs.map((job) => (
        <Job
          key={job.id}
          job={job}
          updateJobsLevel={updateJobsLevel}
          updateJobsRole={updateJobsRole}
          updateJobsLanguages={updateJobsLanguages}
          updateJobsTools={updateJobsTools}
        />
      ))}
    </section>
  );
};

export default JobsContainer;
