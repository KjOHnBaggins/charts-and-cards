import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Fade } from "reactstrap";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./assets/styles/index.scss";
import Users from "../pages/Users";
import Dashboard from "../pages/Dashboard/index.jsx";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import SideBarContainer from "./components/Layout/SideBarContainer";
import AdComp from "../pages/Dashboard/AdComp";
import ColumnChart from "../pages/Dashboard/ColumnChart";
import ActivityComp from "../pages/Dashboard/ActivityComp";

const App = () => {
  library.add(fas);
  const [opened, setOpened] = useState(false);
  const [countryCode, setCountryCode] = useState(null);
  const [searchDataCountry, setSearchDataCountry] = useState(null);
  const top = useRef(null);
  const bottom = useRef(null);
  const githubref = useRef(null);
  const chartsref = useRef(null);
  const aboutref = useRef(null);
  const scrollWithUseRef = (ref) => {
    ref.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const handleOnSearchChange = (searchData) => {
    setSearchDataCountry(searchData);
  };

  useEffect(() => {
    setCountryCode(searchDataCountry?.value);
  }, [searchDataCountry]);

  return (
    <>
      <div className="">
        <Header
          onSearchChange={handleOnSearchChange}
          toggleMenu={toggleMenu}
          ref={top}
        />
        {/* strict mode throws a warning when <Fade> is used. That's up to bootstrap */}
        <Fade in={opened} timeout={100}>
          <SideBarContainer
            toggleMenu={toggleMenu}
            scrollWithUseRef={scrollWithUseRef}
            githubref={githubref}
            aboutref={aboutref}
            chartsref={chartsref}
          />
        </Fade>

        <div className="main-content">
          <div className="page-content">
            <Routes>
              <Route
                path="/"
                element={
                  countryCode && (
                    <Dashboard
                      countryCode={countryCode}
                      githubref={githubref}
                      chartsref={chartsref}
                      aboutref={aboutref}
                    />
                  )
                }
              />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
        <Footer top={top} scrollWithUseRef={scrollWithUseRef} ref={bottom} />
      </div>
    </>
  );
};

export default App;
