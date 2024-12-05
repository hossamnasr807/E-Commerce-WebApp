import React from "react";
import "./navigationbar.css";

const NavigationBar = () => {
  return (
    <nav className="navigation-bar bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Categories */}
        <ul className="nav-list d-flex align-items-center">
          {/* Category 1 */}
          <li className="nav-item dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="electronicsDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Electronics
            </button>
            <ul className="dropdown-menu" aria-labelledby="electronicsDropdown">
              <li><a className="dropdown-item" href="#">Phones</a></li>
              <li><a className="dropdown-item" href="#">Laptops</a></li>
              <li><a className="dropdown-item" href="#">Accessories</a></li>
            </ul>
          </li>

          {/* Category 2 */}
          <li className="nav-item dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="fashionDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Fashion
            </button>
            <ul className="dropdown-menu" aria-labelledby="fashionDropdown">
              <li><a className="dropdown-item" href="#">Men</a></li>
              <li><a className="dropdown-item" href="#">Women</a></li>
              <li><a className="dropdown-item" href="#">Kids</a></li>
            </ul>
          </li>

          {/* Category 3 */}
          <li className="nav-item dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="homeDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home & Furniture
            </button>
            <ul className="dropdown-menu" aria-labelledby="homeDropdown">
              <li><a className="dropdown-item" href="#">Furniture</a></li>
              <li><a className="dropdown-item" href="#">Kitchen</a></li>
              <li><a className="dropdown-item" href="#">Decor</a></li>
            </ul>
          </li>

          {/* Add more categories as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;