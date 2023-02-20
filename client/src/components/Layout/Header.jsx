import React, { useContext, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../context/theme";
import { Card, Col } from "reactstrap";

const Header = ({ onSearchChange, toggleMenu }) => {
  const [{ dark }, toggleDark] = useContext(ThemeContext);
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
  };
  return (
    <header id="page-topbar">
      <Card>
        <div className="navbar-header">
          <div className="d-flex w-100 justify-content-between">
            <div className="">
              <button
                onClick={toggleMenu}
                className="btn btn-sm px-3 font-size-16 header-item"
              >
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              </button>
            </div>
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
                <FontAwesomeIcon
                  icon="fa-solid fa-moon"
                  className="p-1 theme-icon__icon"
                />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </header>
  );
};

export default Header;
