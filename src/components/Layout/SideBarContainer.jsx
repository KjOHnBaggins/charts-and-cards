import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const SideBarContainer = ({ toggleMenu, scrollWithUseRef, adCompRef }) => {
  return (
    <div className="menu">
      <div className="navbar-brand-box my-3">
        <Link
          to="/"
          onClick={toggleMenu}
          className="logo text-decoration-none mx-4"
        >
          Home
        </Link>
      </div>
      <SideBar
        toggleMenu={toggleMenu}
        scrollWithUseRef={scrollWithUseRef}
        adCompRef={adCompRef}
      />
    </div>
  );
};

export default SideBarContainer;
