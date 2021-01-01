import React, { useEffect, useState } from "react";
import JobsData from "./data/jobs/data";
import Header from "./components/Header";
import JobsContainer from "./components/JobsContainer";

const App = () => {
  const [jobs] = useState(JobsData);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    handleFilteredJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs]);

  const handleFilteredJobs = () => setFilteredJobs(jobs);

  const updateJobsLevel = (e) => {
    const jobsToAdd = [];
    jobs.map((job) => job.level === e.target.value && jobsToAdd.push(job));
    setFilteredJobs(jobsToAdd);
    !filters.includes(e.target.value) &&
      setFilters([...filters, e.target.value]);
  };

  const updateJobsRole = (e) => {
    const jobsToAdd = [];
    jobs.map((job) => job.role === e.target.value && jobsToAdd.push(job));

    setFilteredJobs(jobsToAdd);

    !filters.includes(e.target.value) &&
      setFilters([...filters, e.target.value]);
  };

  const updateJobsLanguages = (e) => {
    const jobsToAdd = [];
    jobs.map(
      (job) =>
        job.languages &&
        job.languages.map(
          (language) => language === e.target.value && jobsToAdd.push(job)
        )
    );
    setFilteredJobs(jobsToAdd);

    !filters.includes(e.target.value) &&
      setFilters([...filters, e.target.value]);
  };

  const updateJobsTools = (e) => {
    const jobsToAdd = [];
    jobs.map(
      (job) =>
        job.tools &&
        job.tools.map((tool) => tool === e.target.value && jobsToAdd.push(job))
    );
    setFilteredJobs(jobsToAdd);

    !filters.includes(e.target.value) &&
      setFilters([...filters, e.target.value]);
  };

  const removeFilter = (e) => {
    const filtersToRemove = filters.filter((item) => item !== e.target.value);
    const jobsToAdd = [];

    jobs.map((job) => {
      const hasRole = filtersToRemove.includes(String(job.role));
      const hasLevel = filtersToRemove.includes(String(job.level));
      const hasLanguage = filtersToRemove.some(
        (item) => job.languages && job.languages.includes(item)
      );
      const hasTool = filtersToRemove.some(
        (item) => job.tools && job.tools.includes(item)
      );

      if (hasLevel || hasRole || hasLanguage || hasTool) {
        jobsToAdd.push(job);
      }

      return null;
    });

    if (jobsToAdd.length !== 0) {
      setFilteredJobs(jobsToAdd);
    } else {
      setFilteredJobs(jobs);
    }

    setFilters(filtersToRemove);
  };

  const clearAllFilters = () => {
    setFilters([]);
    handleFilteredJobs();
  };

  return (
    <>
      <Header
        filters={filters}
        removeFilter={removeFilter}
        clearAllFilters={clearAllFilters}
      />
      <JobsContainer
        jobs={filteredJobs}
        updateJobsRole={updateJobsRole}
        updateJobsLevel={updateJobsLevel}
        updateJobsLanguages={updateJobsLanguages}
        updateJobsTools={updateJobsTools}
      />
    </>
  );
};

export default App;
