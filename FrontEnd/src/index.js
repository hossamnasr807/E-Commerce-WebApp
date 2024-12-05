import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Homepage from './pages/homepage';  // Import the Homepage component

ReactDOM.render(
  <React.StrictMode>
    <Homepage />  {/* Render the Homepage component */}
  </React.StrictMode>,
  document.getElementById('root')
);
