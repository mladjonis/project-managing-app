import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import Mobile from "./Mobile";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { firebaseAuth, profile } = props;
  const loggedInLinks = firebaseAuth.uid ? (
    <SignInLink profile={profile} />
  ) : (
    <SignOutLink />
  );
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
          {loggedInLinks}
        </div>
      </nav>
      <Mobile isLoggedIn={firebaseAuth.uid} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    firebaseAuth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
