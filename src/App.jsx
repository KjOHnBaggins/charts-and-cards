import { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./assets/styles/index.scss";
import Users from "../pages/Users";
import Dashboard from "../pages/Dashboard/index.jsx";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import SideBarContainer from "./components/Layout/SideBarContainer";

const App = () => {
  library.add(fas);
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

  const handleOnSearchChange = (searchData) => {
    setSearchDataCountry(searchData);
  };

  useEffect(() => {
    setCountryCode(searchDataCountry?.value);
  }, [searchDataCountry]);

  // menu toggle without affecting state
  // close dropdown menu when user clicks outside
  const menuRef = useRef(null);
  const toggleMenu = () => {
    const classList = menuRef.current.classList;
    classList.contains("open")
      ? classList.remove("open")
      : classList.add("open");
  };
  // useEffect(() => {
  //   document.addEventListener("click", toggleMenu);
  //   return () => {
  //     document.removeEventListener("click", toggleMenu);
  //   };
  // }, [menuRef.current]);

  return (
    <>
      <div className="app">
        <Header
          onSearchChange={handleOnSearchChange}
          toggleMenu={toggleMenu}
          ref={top}
        />
        {/* strict mode throws a warning about findDomNode when <Fade> is used. That's up to bootstrap */}
        <SideBarContainer
          toggleMenu={toggleMenu}
          scrollWithUseRef={scrollWithUseRef}
          githubref={githubref}
          aboutref={aboutref}
          chartsref={chartsref}
          menuRef={menuRef}
        />

        <div className="main-content">
          <div className="page-content">
            <Routes>
              <Route
                path="/"
                element={
                  countryCode && (
                    <Dashboard
                      countryCode={countryCode}
                      scrollWithUseRef={scrollWithUseRef}
                      top={top}
                      bottom={bottom}
                      githubref={githubref}
                      chartsref={chartsref}
                      aboutref={aboutref}
                    />
                  )
                }
              />
              <Route
                path="/users"
                element={
                  <Users top={top} scrollWithUseRef={scrollWithUseRef} />
                }
              />
            </Routes>
          </div>
        </div>
        <Footer ref={bottom} />
      </div>
    </>
  );
};

export default App;
