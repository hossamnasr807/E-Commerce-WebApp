// src/components/LoginForm.js
import React, { useState } from 'react';
import '../pages/loginpage.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation for demonstration
    if (email === '' || password === '') {
      setErrorMessage('Both fields are required');
    } else {
      // Perform login (authentication logic here)
      alert("Logged in with email: ${email}");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <div className="footer">
          <a href="#">Forgot Password?</a>
          <p>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;