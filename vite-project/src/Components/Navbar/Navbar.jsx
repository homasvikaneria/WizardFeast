import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul>
          <li><NavLink to="/" className="navlink">Home</NavLink></li>
          <li><NavLink to="/meals" className="navlink">Meals</NavLink></li>
          <li><NavLink to="/cocktail" className="navlink">Cocktails</NavLink></li>
          <li><NavLink to="/harrypotter" className="navlink">Harry Potter</NavLink></li>
          <li><NavLink to="/bank" className="navlink">Bank</NavLink></li>
          <li><NavLink to="/extra" className="navlink">extra</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
