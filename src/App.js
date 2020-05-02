import React from "react";
import JobListing from "./components/JobListing/JobListing";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <JobListing />
    </div>
  );
}

export default App;
