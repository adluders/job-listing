import React from "react";
import IndividualJob from "../IndividualJob/IndividualJob";
import data from "../../data/jobs/data.json";

import "./JobListing.css";

const JobListing = () => {
  return (
    <div>
      {data.map((item) => (
        <IndividualJob key={item.id} data={item} />
      ))}
    </div>
  );
};

export default JobListing;
