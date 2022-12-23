import "./assets/styles/index.scss";
import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Users from "../pages/Users";
import Dashboard from "../pages/Dashboard/index.jsx";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import SideBarContainer from "./components/Layout/SideBarContainer";

const App = () => {
  library.add(fas);
  const [closed, setClosed] = useState(false);
  const [countryCode, setCountryCode] = useState(null);
  const [searchDataCountry, setSearchDataCountry] = useState(null);

  const handleToggle = (isClosed) => {
    setClosed(isClosed);
  };

  const handleOnSearchChange = (searchData) => {
    setSearchDataCountry(searchData);
  };

  useEffect(() => {
    setCountryCode(searchDataCountry?.value);
  }, [searchDataCountry]);

  return (
    <>
      <Router>
        <div className="">
          <Header
            onSearchChange={handleOnSearchChange}
            onToggle={handleToggle}
          />
          {closed && <SideBarContainer />}
          <div className="main-content">
            <div className="page-content">
              <Routes>
                <Route
                  path="/"
                  element={
                    countryCode && <Dashboard countryCode={countryCode} />
                  }
                />
                <Route path="/users" element={<Users />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
