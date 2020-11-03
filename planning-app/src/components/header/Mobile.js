import React from "react";
import { NavLink } from "react-router-dom";

const Mobile = () => {
  return (
    <ul className="sidenav sidenav-close" id="mobile-demo">
      <li>
        <NavLink to="/create">New task</NavLink>
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
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
};

export default Mobile;
