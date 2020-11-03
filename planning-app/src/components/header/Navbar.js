import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import Mobile from "./Mobile";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="nav-wrapper light-blue darken-3">
        <div className="container">
          <Link to="/" className="brand-logo ">
            Atila
          </Link>
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <SignInLink />
          <SignOutLink />
        </div>
      </nav>
      <Mobile />
    </React.Fragment>
  );
};

export default Navbar;
