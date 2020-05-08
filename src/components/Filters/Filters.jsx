import React from "react";
import closeBtn from "../../assets/images/icon-remove.svg";

import "./Filters.css";

const Filters = ({ name }) => {
  return (
    <div className="Filters">
      <button className="Filter">
        {name}
        <span>
          <img src={closeBtn} alt="Remove Filter" />
        </span>
      </button>
    </div>
  );
};

export default Filters;
