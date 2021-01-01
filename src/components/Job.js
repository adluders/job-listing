import React from "react";
import { BsDot } from "react-icons/bs";

const Job = ({
  job,
  updateJobsLevel,
  updateJobsRole,
  updateJobsLanguages,
  updateJobsTools,
}) => {
  const {
    company,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    logo,
  } = job;
  return (
    <div className={`job ${featured && "featured"}`}>
      <div className="job__graphic">
        <img src={logo} alt={`${company} Logo`} />
      </div>

      <div className="job__details">
        <div className="job__details-company">
          <p>{company}</p>
          {job.new && <p className="badge badge-primary">new!</p>}
          {featured && <p className="badge badge-secondary">featured</p>}
        </div>

        <div className="job__details-position">
          <h1>{position}</h1>
        </div>

        <div className="job__details-info">
          <p>{postedAt} </p>
          <p>
            <BsDot />
          </p>
          <p> {contract}</p>
          <p>
            <BsDot />
          </p>

          <p>{location}</p>
        </div>
      </div>

      <div className="job__filters">
        <button value={role} className="filter" onClick={updateJobsRole}>
          {role}
        </button>
        <button value={level} className="filter" onClick={updateJobsLevel}>
          {level}
        </button>
        {languages &&
          languages.map((language) => (
            <button
              className="filter"
              key={Math.random()}
              value={language}
              onClick={updateJobsLanguages}
            >
              {language}
            </button>
          ))}

        {tools &&
          tools.map((tool) => (
            <button
              className="filter"
              key={Math.random()}
              value={tool}
              onClick={updateJobsTools}
            >
              {tool}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Job;
