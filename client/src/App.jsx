import { useState, useRef } from "react";
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
  const [countryCode, setCountryCode] = useState("usa");

  const githubref = useRef(null);
  const chartsref = useRef(null);
  const aboutref = useRef(null);
  const menuRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleOnSearchChange = (searchData) => {
    setCountryCode(searchData);
  };

  const toggleMenu = () => {
    const classList = menuRef.current.classList;
    classList.contains("open")
      ? classList.remove("open")
      : classList.add("open");
  };

  return (
    <div className="app">
      <Header onSearchChange={handleOnSearchChange} toggleMenu={toggleMenu} />
      <SideBarContainer
        toggleMenu={toggleMenu}
        scrollToTop={scrollToTop}
        githubref={githubref}
        aboutref={aboutref}
        chartsref={chartsref}
        menuRef={menuRef}
      />

      <div className="page-content" ref={top}>
        <Routes>
          <Route
            path="/"
            element={
              countryCode && (
                <Dashboard
                  countryCode={countryCode}
                  scrollToTop={scrollToTop}
                  githubref={githubref}
                  chartsref={chartsref}
                  aboutref={aboutref}
                />
              )
            }
          />
          <Route path="/users" element={<Users scrollToTop={scrollToTop} />} />
        </Routes>
      </div>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default App;
