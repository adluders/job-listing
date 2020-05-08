import React from "react";
import Filters from "../Filters/Filters";
import header from "../../assets/images/bg-header-desktop.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={header} alt="Header" />

      <div className="Filters-Section">
        <Filters name={"New"} />

        <div className="Clear-Filters">
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
