import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className="sidebar-menu">
      <ul className="list-unstyled d-flex flex-column gap-4">
        <li className="menu-title fw-bold mt-3 mx-4">Navigation</li>
        <li className="menu-item">
          <Link to="#github" className="text-sm mx-3 d-flex">
            <div className="menu-pill">
              <FontAwesomeIcon icon="fa-solid fa-users" />
              <span>Github</span>
            </div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="#charts" className="text-sm mx-3 d-flex">
            <div className="menu-pill">
              <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
              <span>Charts</span>
            </div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="#about" className="text-sm mx-3 d-flex">
            <div className="menu-pill">
              <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
              <span>About</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
