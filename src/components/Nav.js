import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

function Nav() {

  const navStyle ={
    color:"white"
  }
  return (
    <nav style={{border:"2px solid black",borderRadius:"50px"}}>
        <h3>Homework 4</h3>
        <ul className="nav-links">
            <Link style={navStyle} to="/"><li>Home Page</li></Link>
            <Link style={navStyle} to="/about"><li>About</li></Link>
            <Link style={navStyle} to="/shop"><li>Shop</li></Link>
            <Link style={navStyle} to="/contact"><li>Contact</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;