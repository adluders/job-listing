import React from "react";
import Logo from "../../assets/images/photosnap.svg";
import "./IndividualJob.css";

const IndividualJob = ({ data }) => {
  return (
    <div className="Individual-Job">
      <div className="Logo">
        <img src={Logo} alt={`${data.company} Logo`} />
      </div>
      <div className="Individual-Job-Info">
        <div className="Title">
          <p className="Company-Name"> {data.company} </p>
          {data.featured && <p className="Title-Badge Featured"> Featured </p>}
          {data.new && <p className="Title-Badge New"> New </p>}
        </div>
        <div className="Job-Title">
          <h1 className="Position"> {data.position} </h1>
          <div className="Job-Title-Info">
            <button className="Role Badge"> {data.role} </button>
            <button className="Level Badge"> {data.level} </button>
            {data.languages &&
              data.languages.map((lan) => (
                <button className="Language Badge"> {lan} </button>
              ))}
            {data.tools &&
              data.tools.map((tool) => (
                <button className="Tool Badge"> {tool} </button>
              ))}
          </div>
        </div>
        <div className="Job-Info">
          <p> {data.postedAt} </p>
          <p> {data.contract} </p>
          <p> {data.location} </p>
        </div>
      </div>
    </div>
  );
};

export default IndividualJob;
