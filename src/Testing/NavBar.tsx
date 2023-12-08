import { NavLink } from "react-router-dom";
import {About} from './About'
import {Home} from './Home'
import "./styles.css";

// import React from "react";

export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink to="/">
        <Home/>
      </NavLink>
      <NavLink to="/about"><About/></NavLink>
      {/* <NavLink to="/contact">Contact</NavLink> */}
    </nav>
  );
}
