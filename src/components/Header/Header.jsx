import React from "react";
import Filters from "../Filters/Filters";
import header from "../../assets/images/bg-header-desktop.svg";
import "./Header.css";

const Header = ({ propItems, handleFilterRemove }) => {
  return (
    <div className="Header">
      <img src={header} alt="Header" />

      <div className="Filters-Section">
        <div className="Filters">
          {propItems
            ? propItems.map((item) => (
                <Filters
                  name={item}
                  key={item}
                  handleFilterRemove={handleFilterRemove}
                />
              ))
            : null}
        </div>

        <div className="Clear-Filters">
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
