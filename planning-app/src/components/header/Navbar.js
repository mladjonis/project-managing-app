import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import Mobile from "./Mobile";
import { connect } from "react-redux";
import M from "materialize-css";

const Navbar = (props) => {
  const { firebaseAuth, profile } = props;
  const [instance, setInstance] = useState(false);
  const loggedInLinks = firebaseAuth.uid ? (
    <SignInLink profile={profile} />
  ) : (
    <SignOutLink />
  );

  const handleClick = (e) => {
    console.log(e);
    setInstance(!instance);
  };
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
          {/* <div
            className="right myDiv"
            style={{
              marginTop: "0.75rem",
              marginRight: "-2rem",
              position: "unset",
            }}
            onClick={handleClick}
          >
            <img
              src={profile.photoURL}
              style={{
                height: "24px",
                widows: "24px",
                marginTop: "0.4rem",
                // border: "0.4rem, solid, #1cd647", kasnije u chatu dodati
              }}
              alt={profile.photoURL}
            />
            <ul>
              <a class="btn">
                <i class="large material-icons">mode_edit</i>
              </a>
              <a>
                <span>asjdiasdjisjd</span>
              </a>
            </ul>
          </div> */}
        </div>
      </nav>
      <Mobile isLoggedIn={firebaseAuth.uid} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    firebaseAuth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
