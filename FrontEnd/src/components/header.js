import React from "react";
import "./header.css"; // Ensure you have this CSS file for custom styling.

const Header = () => {
  return (
    <header className="header bg-warning py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="logo">
          <h1 className="m-0 fw-bold text-dark">LOGO</h1>
        </div>

        {/* Search Bar with Country Selection */}
        <div className="search-bar-container d-flex align-items-center w-50">
          {/* Country Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn dropdown-toggle d-flex align-items-center"
              type="button"
              id="countryDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/images/egypt-flag.png"
                alt="Egypt"
                className="flag-icon me-2"
              />
              Cairo
            </button>
            <ul className="dropdown-menu" aria-labelledby="countryDropdown">
              <li><a className="dropdown-item" href="#">Cairo</a></li>
              <li><a className="dropdown-item" href="#">Alexandria</a></li>
              <li><a className="dropdown-item" href="#">Giza</a></li>
            </ul>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            className="form-control me-3"
            placeholder="What are you looking for?"
          />

          {/* Language Dropdown */}
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              العربية
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li><a className="dropdown-item" href="#">English</a></li>
              <li><a className="dropdown-item" href="#">العربية</a></li>
            </ul>
          </div>
        </div>

        {/* Icons and Dropdowns */}
        <div className="icons-and-dropdowns d-flex align-items-center">
          {/* Wishlist Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn"
              type="button"
              id="wishlistDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Wishlist
            </button>
            <ul className="dropdown-menu" aria-labelledby="wishlistDropdown">
              <li><a className="dropdown-item" href="#">Item 1</a></li>
              <li><a className="dropdown-item" href="#">Item 2</a></li>
            </ul>
          </div>

          {/* Cart Icon Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn"
              type="button"
              id="cartDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 18.2a.5.5 0 0 0 0-1h-7.99a2.5 2.5 0 0 1-2.46-2.06l-.123-.688h9.16a2.5 2.5 0 0 0 2.355-1.66l1.55-4.34a1.5 1.5 0 0 0-1.413-2.004H5.997l-.065-.364A3.5 3.5 0 0 0 2.488 3.2h-.99a.5.5 0 1 0 0 1h.99a2.5 2.5 0 0 1 2.46 2.06l1.617 9.057a3.5 3.5 0 0 0 3.446 2.884H18ZM6.176 7.45l12.903-.001a.5.5 0 0 1 .47.668l-1.548 4.34a1.5 1.5 0 0 1-1.413.996h-9.34L6.176 7.45Z"
                ></path>
              </svg>
            </button>
            <ul className="dropdown-menu" aria-labelledby="cartDropdown">
              <li><a className="dropdown-item" href="#">Item 1</a></li>
              <li><a className="dropdown-item" href="#">Item 2</a></li>
            </ul>
          </div>

          {/* User Icon Dropdown */}
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 5.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm1 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-12.5 14c0-2.143.486-3.732 1.596-4.796C7.212 13.634 9.058 13 12 13c2.942 0 4.788.635 5.904 1.704 1.11 1.064 1.596 2.652 1.596 4.796a.5.5 0 0 0 1 0c0-2.275-.514-4.186-1.904-5.518C17.212 12.656 15.058 12 12 12c-3.058 0-5.212.656-6.596 1.982C4.014 15.314 3.5 17.225 3.5 19.5a.5.5 0 0 0 1 0Z"
                ></path>
              </svg>
            </button>
            <ul className="dropdown-menu" aria-labelledby="userDropdown">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;