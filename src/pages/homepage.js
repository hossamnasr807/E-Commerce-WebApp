import React from "react";
import Header from "../components/header";
import NavigationBar from "../components/navigationbar";
import Slider from "../components/slider"

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <NavigationBar />
      <Slider />
      {/* Hero Section */}
    </div>
  );
};

export default Homepage;
