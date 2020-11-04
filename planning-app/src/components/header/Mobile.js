import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../actions";
import { connect } from "react-redux";

const Mobile = (props) => {
  console.log(props);
  let loggedIn;
  if (props.isLoggedIn) {
    loggedIn = (
      <React.Fragment>
        <li>
          <NavLink to="/create" className="sidenav-close">
            New task
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="sidenav-close" onClick={props.signOut}>
            Log out
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn lighten-1 sidenav-close">
            Name Lastname
          </NavLink>
        </li>
      </React.Fragment>
    );
  } else {
    loggedIn = (
      <React.Fragment>
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
        )
      </React.Fragment>
    );
  }
  return (
    <ul className="sidenav sidenav-close" id="mobile-demo">
      {loggedIn}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(Mobile);
