import React from "react";
import "./ProductsPage.css";

const products = [
  {
    id: 1,
    name: "Black Worthy Hat",
    price: "$34",
    image: "images/products/cap.jpg",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: "$34",
    image: "images/products/jeans.jpg",
  },
  {
    id: 3,
    name: "Black T-Shirt",
    price: "$34",
    image: "images/products/black-tshirt.jpg",
  },
  {
    id: 4,
    name: "Floral Shirt",
    price: "$34",
    image: "images/products/floralShirt.jpg",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: "$34",
    image: "images/products/sunglasses.jpg",
  },
  {
    id: 6,
    name: "Sneackers",
    price: "$34",
    image: "images/products/sneakers.jpg",
  },
  {
    id: 7,
    name: "Yellow Boots",
    price: "$34",
    image: "images/products/shoes.jpg",
  },
  {
    id: 8,
    name: "Leather Jacket",
    price: "$34",
    image: "images/products/black-jacket.jpg",
  },
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img
      className="product-card-image"
      src={product.image}
      alt={product.name}
    />
    <h3 className="product-card-title">{product.name}</h3>
    <p className="product-card-price">{product.price}</p>
  </div>
);

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1 className="products-page-title">All Products</h1>
      <button className="filter-button">Filter</button>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
