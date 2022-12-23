import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdComp from "../../../pages/Dashboard/AdComp";

const SideBar = ({ toggleMenu, scrollWithUseRef, adCompRef }) => {
  return (
    <div className="sidebar-menu">
      <ul className="list-unstyled d-flex flex-column gap-4">
        <li className="menu-title fw-bold mt-3 mx-4">Navigation</li>
        <li className="menu-item">
          <Link
            to="#adcomp"
            onClick={scrollWithUseRef(adCompRef)}
            className="text-sm mx-3 d-flex"
          >
            <div className="menu-pill">
              <FontAwesomeIcon icon="fa-solid fa-users" />
              <span>Github</span>
            </div>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="#charts"
            onClick={toggleMenu}
            className="text-sm mx-3 d-flex"
          >
            <div className="menu-pill">
              <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
              <span>Charts</span>
            </div>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="#about"
            onClick={toggleMenu}
            className="text-sm mx-3 d-flex"
          >
            <div className="menu-pill">
              <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
              <span>About</span>
            </div>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/users"
            onClick={toggleMenu}
            className="text-sm mx-3 d-flex"
          >
            <div className="menu-pill">
              <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
              <span>For devs</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
