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
      activeStyle={{background: "brown"}}
      >
        Home
      </NavLink>
      <NavLink 
      to="/students"
      exact
      style={linkStyles}
      activeStyle={{background: "grey"}}
      >
        Students
      </NavLink>
      <NavLink 
      to="/gryffindor"
      exact
      style={linkStyles}
      activeStyle={{background: "grey"}}
      >
        Gryffindor
      </NavLink>
      <NavLink 
      to="/ravenclaw"
      exact
      style={linkStyles}
      activeStyle={{background: "grey"}}
      >
        Ravenclaw
      </NavLink>
      <NavLink 
      to="/hufflepuff"
      exact
      style={linkStyles}
      activeStyle={{background: "grey"}}
      >
        Hufflepuff
      </NavLink>
      <NavLink 
      to="/slytherin"
      exact
      style={linkStyles}
      activeStyle={{background: "grey"}}
      >
        Slytherin
      </NavLink>
    </div>
  )
}

export default NavBar;