import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const SideBarContainer = () => {
  return (
    <div className="menu">
      <div className="navbar-brand-box my-3">
        <Link to="/" className="logo text-decoration-none mx-4">
          Home
        </Link>
      </div>
      <SideBar />
    </div>
  );
};

export default SideBarContainer;
