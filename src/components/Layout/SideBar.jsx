import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuContext } from "../../context/menu";

const SideBar = () => {
  const [{ isCollapsed }] = useContext(MenuContext);
  return (
    <div className="h-100">
      <div className="" id="#sidebar-menu">
        <ul className="list-unstyled" id="side-menu">
          <li className="menu-title mx-4 px-4">Menu</li>
          <li>
            <Link
              to="/users"
              className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-item-center"
            >
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-users" />
                {!isCollapsed && <span>Users</span>}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-item-center"
            >
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                {!isCollapsed && <span>Calendar</span>}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/e-commerce"
              className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-item-center"
            >
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
                {!isCollapsed && <span>E-commerce</span>}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/email"
              className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-item-center"
            >
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                {!isCollapsed && <span>E-mail</span>}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
