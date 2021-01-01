import React from "react";
import RemoveBtn from "../assets/images/icon-remove.svg";

const HeaderFilter = ({ filterName, removeFilter }) => {
  return (
    <div>
      <div className="filter-item">
        <p>{filterName}</p>
        <button value={filterName} onClick={removeFilter}>
          <img src={RemoveBtn} alt="remove filter" />
        </button>
      </div>
    </div>
  );
};

export default HeaderFilter;
