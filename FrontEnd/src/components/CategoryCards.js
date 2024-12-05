import React from "react";
import { FaTshirt, FaWatch, FaPants } from "react-icons/fa"; // Example icons
import "./CategoryCards.css"; // Custom styling

const CategoryCards = () => {
  const categories = [
    { icon: <FaTshirt />, label: "Shirts" },
    { icon: <FaPants />, label: "Pants" },
    { icon: <FaWatch />, label: "Watches" },
    { icon: <FaTshirt />, label: "Shirts" },
    { icon: <FaPants />, label: "Pants" },
    { icon: <FaWatch />, label: "Watches" },
  ];

  return (
    <div className="category-cards">
      {categories.map((category, index) => (
        <div key={index} className="card">
          <div className="icon">{category.icon}</div>
          <p>{category.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
