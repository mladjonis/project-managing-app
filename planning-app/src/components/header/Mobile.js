import React from "react";
import { NavLink } from "react-router-dom";

const Mobile = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <NavLink to="/create" className="sidenav-close">
          New task
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="sidenav-close">
          Log out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn lighten-1 sidenav-close">
          Name Lastname
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className="sidenav-close">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" className="sidenav-close">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default Mobile;
