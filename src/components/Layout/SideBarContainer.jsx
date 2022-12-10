import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { MenuContext } from "../../context/menu";

const SideBarContainer = () => {
  const [{ isCollapsed }] = useContext(MenuContext);
  return (
    <div className="menu">
      <div className="navbar-brand-box my-3">
        {!isCollapsed && (
          <Link to="/" className="logo text-decoration-none mx-4 px-4">
            Demo
          </Link>
        )}
      </div>
      <div className="h-100" data-simplebar>
        <SideBar />
      </div>
    </div>
  );
};

export default SideBarContainer;
