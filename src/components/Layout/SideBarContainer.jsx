import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "reactstrap";

const SideBarContainer = ({
  toggleMenu,
  scrollWithUseRef,
  githubref,
  aboutref,
  chartsref,
  menuRef,
}) => {
  return (
    <div ref={menuRef} className="menu">
      <Card>
        <div className="navbar-brand-box my-4">
          <Link
            to="/"
            onClick={toggleMenu}
            className="logo text-decoration-none mx-4"
          >
            Home
          </Link>
        </div>
        <div className="sidebar-menu">
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li className="menu-title fw-bold mt-3 mx-4">Navigation</li>
            <li className="menu-item">
              <button
                onClick={() => {
                  scrollWithUseRef(githubref);
                }}
                className="text-sm d-flex"
              >
                <div className="menu-pill">
                  <FontAwesomeIcon icon="fa-solid fa-users" />
                  <span>Github</span>
                </div>
              </button>
            </li>
            <li className="menu-item">
              <button
                onClick={() => {
                  scrollWithUseRef(chartsref);
                }}
                className="text-sm  d-flex "
              >
                <div className="menu-pill">
                  <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                  <span>Charts</span>
                </div>
              </button>
            </li>
            <li className="menu-item">
              <button
                onClick={() => {
                  scrollWithUseRef(aboutref);
                }}
                className="text-sm  d-flex"
              >
                <div className="menu-pill">
                  <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                  <span>about</span>
                </div>
              </button>
            </li>
            <li className="menu-item">
              <Link
                to="/users"
                onClick={toggleMenu}
                className="text-sm d-flex devs-link"
              >
                <div className="menu-pill">
                  <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
                  <span>For devs</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default SideBarContainer;
