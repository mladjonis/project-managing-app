import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions";

class UserProfile extends Component {
  componentDidMount() {}
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
