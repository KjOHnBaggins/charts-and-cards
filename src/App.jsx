import "./assets/styles/index.scss";
import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Users from "../pages/Users";
import Dashboard from "../pages/Dashboard/index.jsx";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import SideBarContainer from "./components/Layout/SideBarContainer";
import { Fade } from "reactstrap";

const App = () => {
  library.add(fas);
  const [opened, setOpened] = useState(false);
  const [countryCode, setCountryCode] = useState(null);
  const [searchDataCountry, setSearchDataCountry] = useState(null);
  const adCompRef = useRef();

  const scrollWithUseRef = (componentRef) => {
    componentRef.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
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
      <Router>
        <div className="">
          <Header
            onSearchChange={handleOnSearchChange}
            toggleMenu={toggleMenu}
          />
          <Fade in={opened} timeout={100}>
            <SideBarContainer
              toggleMenu={toggleMenu}
              scrollWithUseRef={scrollWithUseRef}
              adCompRef={adCompRef}
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
                        adCompRef={adCompRef}
                      />
                    )
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
