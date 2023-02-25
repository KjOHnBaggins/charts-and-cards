import { Link } from "react-router-dom";
import { Card } from "reactstrap";
const SideBarContainer = ({
  toggleMenu,
  scrollIntoView,
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
            Charts and Cards
          </Link>
        </div>
        <div className="sidebar-menu">
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li className="menu-title fw-bold mt-3 mx-4">Navigation</li>
            <li className="menu-item">
              <button
                onClick={() => {
                  scrollIntoView(githubref);
                }}
                className="text-sm d-flex"
              >
                <div className="menu-pill">
                  <span>Github</span>
                </div>
              </button>
            </li>
            <li className="menu-item">
              <button
                onClick={() => {
                  scrollIntoView(chartsref);
                }}
                className="text-sm  d-flex "
              >
                <div className="menu-pill">
                  <span>Charts</span>
                </div>
              </button>
            </li>
            <li className="menu-item">
              <button
                onClick={() => {
                  scrollIntoView(aboutref);
                }}
                className="text-sm  d-flex"
              >
                <div className="menu-pill">
                  <span>About</span>
                </div>
              </button>
            </li>
            <li className="menu-item">
              <Link
                to="/fordevs"
                onClick={toggleMenu}
                className="text-sm d-flex devs-link"
              >
                <div className="menu-pill">
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
