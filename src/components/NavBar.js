import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = { 
  display: "inline-block",
  width: "75px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
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
      activeStyle={{background: "#a9a9a9"}}
      >
        Home
      </NavLink>
      <NavLink 
      to="/students"
      exact
      style={linkStyles}
      activeStyle={{background: "#a9a9a9"}}
      >
        Students
      </NavLink>
      <NavLink 
      to="/houses"
      exact
      style={linkStyles}
      activeStyle={{background: "#a9a9a9"}}
      >
        Houses
      </NavLink>
      <NavLink 
      to="/houses/gryffindor"
      exact
      style={linkStyles}
      activeStyle={{background: "maroon"}}
      >
        Gryffindor
      </NavLink>
      <NavLink 
      to="/houses/ravenclaw"
      exact
      style={linkStyles}
      activeStyle={{background: "navy"}}
      >
        Ravenclaw
      </NavLink>
      <NavLink 
      to="/houses/hufflepuff"
      exact
      style={linkStyles}
      activeStyle={{background: "black"}}
      >
        Hufflepuff
      </NavLink>
      <NavLink 
      to="/houses/slytherin"
      exact
      style={linkStyles}
      activeStyle={{background: "green"}}
      >
        Slytherin
      </NavLink>
    </div>
  )
}

export default NavBar;