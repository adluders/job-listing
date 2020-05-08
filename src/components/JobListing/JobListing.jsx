import React from "react";
import IndividualJob from "../IndividualJob/IndividualJob";
import data from "../../data/jobs/data.json";

import "./JobListing.css";

const displayFilter = (e) => {
  console.log(e.target.value);
};

const JobListing = () => {
  return (
    <div>
      {data.map((item) => (
        <IndividualJob
          key={item.id}
          data={item}
          displayFilter={displayFilter}
        />
      ))}
    </div>
  );
};

export default JobListing;
