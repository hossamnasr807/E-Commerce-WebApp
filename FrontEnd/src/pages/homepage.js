import React from "react";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">ShopEasy</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Dropdown Menu for Categories */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Electronics</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Mobiles & Accessories</a></li>
                      <li><a className="dropdown-item" href="#">Laptops & Accessories</a></li>
                      <li><a className="dropdown-item" href="#">Gaming Essentials</a></li>
                      <li><a className="dropdown-item" href="#">TVs & Home Entertainment</a></li>
                      <li><a className="dropdown-item" href="#">Cameras</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Fashion</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Women's Fashion</a></li>
                      <li><a className="dropdown-item" href="#">Men's Fashion</a></li>
                      <li><a className="dropdown-item" href="#">Kids' Fashion</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">Home & Appliances</a></li>
                  <li><a className="dropdown-item" href="#">Toys & Games</a></li>
                  <li><a className="dropdown-item" href="#">Health & Beauty</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="/cart">Cart</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4">Welcome to ShopEasy</h1>
          <p className="lead">Your one-stop shop for everything!</p>
          <a href="#products" className="btn btn-primary btn-lg">Shop Now</a>
        </div>
      </div>

      {/* Featured Products */}
      <div id="products" className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/images/download.jpeg" className="card-img-top" alt="Product 1" />
              <div className="card-body text-center">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">$20.00</p>
                <a href="#" className="btn btn-outline-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/images/download.jpeg" alt="Product 2" className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">$30.00</p>
                <a href="#" className="btn btn-outline-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/images/download.jpeg" className="card-img-top" alt="Product 3" />
              <div className="card-body text-center">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">$40.00</p>
                <a href="#" className="btn btn-outline-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <div className="container">
          <p>&copy; 2024 ShopEasy. All rights reserved.</p>
          <p>
            <a href="#" className="text-light text-decoration-none">Privacy Policy</a> | 
            <a href="#" className="text-light text-decoration-none">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
