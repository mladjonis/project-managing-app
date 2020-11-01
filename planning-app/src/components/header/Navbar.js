import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import M from "materialize-css";
import Mobile from "./Mobile";

const Navbar = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <React.Fragment>
      <nav className="nav-wrapper light-blue darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Planning app
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
