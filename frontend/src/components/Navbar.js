import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Cashify</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/sell">Sell Phone</Link>
        </li>
        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user && (
          <li>
            <span>Hi, {user}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
