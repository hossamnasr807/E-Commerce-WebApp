// src/pages/LoginPage.js
import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navigationbar';
import LoginForm from '../components/loginform';
import './loginpage.css';  // Import the login page's specific styles

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="login-page">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;