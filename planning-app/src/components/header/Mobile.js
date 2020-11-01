import React from "react";
import { NavLink } from "react-router-dom";

const Mobile = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <NavLink to="/">New task</NavLink>
      </li>
      <li>
        <NavLink to="/">Log out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn lighten-1">
          Name Lastname
        </NavLink>
      </li>
      <li>
        <NavLink to="/">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default Mobile;
