import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AsyncPaginate } from "react-select-async-paginate";
import { ThemeContext } from "../../context/theme";
import { Card, Col } from "reactstrap";

const Header = ({ onSearchChange, toggleMenu }) => {
  const [{ dark }, toggleDark] = useContext(ThemeContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    return await fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: Array.from(response)?.map((country) => {
            return {
              value: `${country.cca3}`,
              label: `${country.name.common}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData.value);
    onSearchChange(searchData.value);
    navigate(`/search/${searchData.value}`);
  };
  return (
    <header id="page-topbar">
      <Card>
        <div className="navbar-header">
          <div className="d-flex w-100 justify-content-between">
            <button
              // onClick={toggleMenu}
              className="btn btn-sm px-3 font-size-16 header-item"
            >
              <svg
                width="28px"
                height="28px"
                viewBox="-1.92 -1.92 35.84 35.84"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)"
                stroke="#0F110C"
                strokeWidth="0.6640000000000001"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.192"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>bars-sort</title>{" "}
                  <path
                    className="menu-icon"
                    d="M30 6.749h-28c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM18 14.75h-16c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h16c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM8.053 22.75h-6.053c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h6.053c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"
                  />{" "}
                </g>
              </svg>
            </button>
            <Col>
              <div className="w-100">
                <AsyncPaginate
                  placeholder="Search for a country"
                  debounceTimeout={600}
                  value={search}
                  onChange={handleOnChange}
                  loadOptions={loadOptions}
                  autoFocus="true"
                />
              </div>
            </Col>
            <div className="header-navigation">
              <button className="theme-icon" onClick={toggleDark}>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="-3.5 -3.5 42.00 42.00"
                  data-name="Layer 2"
                  id="Layer_2"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000"
                  strokeWidth="0.00035"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.35"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </header>
  );
};

export default Header;
