import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/loginpage";
import LoginForm from "./components/loginform";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
