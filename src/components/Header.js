import React from "react";
import FilterBar from "./FilterBar";

const Header = ({ filters, removeFilter, clearAllFilters }) => {
  return (
    <header className="header">
      {filters.length !== 0 && (
        <FilterBar
          filters={filters}
          removeFilter={removeFilter}
          clearAllFilters={clearAllFilters}
        />
      )}
    </header>
  );
};

export default Header;
