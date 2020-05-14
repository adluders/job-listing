import React, { useState, useEffect } from "react";
import JobListing from "./components/JobListing/JobListing";
import Header from "./components/Header/Header";
import data from "./data/jobs/data.json";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]),
    [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  /**
   * Check if the job array includes item.role.toLowCase()
   */
  const jobFiltering = (e) => {
    console.log(e.target.value);
    setFilterOptions([...filterOptions, e.target.value]);
    console.log(filterOptions);
  };

  return (
    <div className="App">
      {
        <>
          <Header propItems={filterOptions} handleFilterRemove={null} />
          <JobListing jobs={jobs} handleClick={jobFiltering} />
        </>
      }
    </div>
  );
};

export default App;
