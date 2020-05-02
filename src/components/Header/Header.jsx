import React from "react";
import header from "../../assets/images/bg-header-desktop.svg";
import closeBtn from "../../assets/images/icon-remove.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={header} alt="Header" />
      <div className="Filters">
        <button className="Filter">
          FrontEnd
          <span>
            <img src={closeBtn} alt="Remove Filter" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
