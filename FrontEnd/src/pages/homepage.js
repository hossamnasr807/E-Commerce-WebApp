import React from "react";
import Header from "../components/header";

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4">Welcome to ShopEasy</h1>
          <p className="lead">Your one-stop shop for everything!</p>
          <a href="#products" className="btn btn-primary btn-lg">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
