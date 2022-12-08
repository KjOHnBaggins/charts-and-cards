import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/index.scss";
import Dashboard from "../pages/Dashboard/index.jsx";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const App = () => {
  library.add(fas);
  return (
    <>
      <Router>
        <div className="main-content">
          <div className="page-content">
            <Dashboard />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
