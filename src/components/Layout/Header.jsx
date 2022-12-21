import React, { useContext, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../context/theme";
import { MenuContext } from "../../context/menu";

const Header = ({ onSearchChange }) => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const [{ menuClass, isCollapsed }, toggleMenu] = useContext(MenuContext);
  const [search, setSearch] = useState(null);
  // lets hardcode it for now

  const countryArray = [
    {
      name: "United States",
      value: "us",
    },
    {
      name: "Great Britain",
      value: "gb",
    },
    {
      name: "France",
      value: "fr",
    },
    {
      name: "Switzerland",
      value: "ch",
    },
    {
      name: "Japan",
      value: "jp",
    },
    {
      name: "Korea",
      value: "kr",
    },
    {
      name: "Brazil",
      value: "br",
    },
  ];

  const loadOptions = (inputValue) => {
    return {
      options: countryArray.map((country) => {
        return {
          value: country.value,
          label: country.name,
        };
      }),
    };
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData.value);
    onSearchChange(searchData);
  };

  return (
    <header id="page-topbar">
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
          <div className="header-navigation">
            <button className="theme-icon mx-4" onClick={toggleTheme}>
              {isDark ? (
                <FontAwesomeIcon icon="fa-solid fa-sun" className="p-1" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-moon" className="p-1" />
              )}
            </button>
            <FontAwesomeIcon icon="fa-solid fa-user" className="p-1" />
            <FontAwesomeIcon icon="fa-solid fa-gear" className="p-1" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
