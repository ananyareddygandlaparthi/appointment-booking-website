import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" /> 
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/find-doctor">Find a Doctor</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
