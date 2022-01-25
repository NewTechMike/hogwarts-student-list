import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = { 
  display: "inline-block",
  width: "75px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lavender",
  textDecoration: "none",
  color: "gold"
};

function NavBar(){
  return (
    <div>
      <NavLink 
      to="/"
      exact
      style={linkStyles}
      activeStyle={{background: "light brown"}}
      >
        Home
      </NavLink>
      <NavLink 
      to="/students"
      exact
      style={linkStyles}
      activeStyle={{background: "silver"}}
      >
        Students
      </NavLink>
    </div>
  )
}

export default NavBar;