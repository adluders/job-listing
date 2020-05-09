import React, { useState } from "react";
import JobListing from "./components/JobListing/JobListing";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);

  const displayFilter = (e) => {
    e.persist();
    setJobs([...jobs, e.target.value]);
    console.log(...jobs);
  };

  const removeFilter = (e) => {
    e.persist();
    console.log(e);
    // this.setState({jobs: })
    // jobs.filter
    // setJobs();
  };

  return (
    <div className="App">
      <Header propItems={jobs} handleFilterRemove={removeFilter} />
      <JobListing handleClick={displayFilter} />
    </div>
  );
};

export default App;
