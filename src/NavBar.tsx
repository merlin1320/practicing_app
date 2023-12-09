// import {About} from './pages/About'
// import {Home} from './pages/Home'
import "./styles/styles.css";
import { Link } from "react-router-dom";

// import React from "react";

export function NavBar() {
  return (
    <div className="navbar-container">
      {/* <button><Link to='Home'>Home</Link></button>
      <button><Link to='About'>About</Link></button> */}
      <Link to='Home'>Home</Link>
      <Link to='About'>About</Link>
    </div>
  )
}

export default NavBar
