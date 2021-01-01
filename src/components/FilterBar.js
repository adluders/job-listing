import React from "react";
import HeaderFilter from "./HeaderFilter";

const FilterBar = ({ filters, removeFilter, clearAllFilters }) => {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <HeaderFilter
          key={Math.random()}
          filterName={filter}
          removeFilter={removeFilter}
        />
      ))}
      <div className="filter-clear">
        <button onClick={clearAllFilters}>clear</button>
      </div>
    </div>
  );
};

export default FilterBar;
