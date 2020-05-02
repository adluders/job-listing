import React from "react";
import JobListing from "./components/JobListing/JobListing";
import header from "./assets/images/bg-header-desktop.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src={header} alt="Header" />
      </div>
      <JobListing />
    </div>
  );
}

export default App;
