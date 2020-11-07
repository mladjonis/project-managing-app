import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const GuardedRoute = ({ Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      props.auth.uid ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(GuardedRoute);
