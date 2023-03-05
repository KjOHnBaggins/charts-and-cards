import { createRef, lazy, Suspense, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/index.scss";
import LoadingCard from "./components/Common/LoadingCard";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Menu from "./components/Layout/Menu";
import Home from "./pages/Home/Home.jsx";
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const ForDevs = lazy(() => import("./pages/forDevs/forDevs"));
const App = () => {
  const [countryCode, setCountryCode] = useState(null);

  const githubref = createRef();
  const chartsref = createRef();
  const aboutref = createRef();
  const menuRef = createRef();
  const menuButtonRef = createRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        menuRef.current.classList.remove("open");
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };
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
      <Header
        onSearchChange={handleOnSearchChange}
        toggleMenu={toggleMenu}
        menuButtonRef={menuButtonRef}
      />
      <Menu
        toggleMenu={toggleMenu}
        scrollToTop={scrollToTop}
        scrollIntoView={scrollIntoView}
        githubref={githubref}
        aboutref={aboutref}
        chartsref={chartsref}
        menuRef={menuRef}
      />

      <div className="page-content" ref={top}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search/:countryCode"
            element={
              countryCode && (
                <Suspense fallback={<LoadingCard />}>
                  <Dashboard
                    countryCode={countryCode}
                    scrollToTop={scrollToTop}
                    githubref={githubref}
                    chartsref={chartsref}
                    aboutref={aboutref}
                  />
                </Suspense>
              )
            }
          />
          <Route
            path="/fordevs"
            element={
              <Suspense fallback={<div>Loading For Developers Page...</div>}>
                <ForDevs scrollToTop={scrollToTop} />
              </Suspense>
            }
          />
        </Routes>
      </div>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default App;
