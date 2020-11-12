import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateUser, getCurrentUser } from "../../actions";
import ImageUpload from "../image-upload/ImageUpload";
import M from "materialize-css";

class UserProfile extends Component {
  state = {
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    photoURL: "",
    file: null,
  };

  onSubmit = (e) => {
    e.preventDefault();
    //call api
    this.props.updateUser(this.state);
  };

  componentDidMount() {
    document.title = "Atila managing app - User profile";

    this.props.getCurrentUser();
    this.setState({
      ...this.state,
      ...this.props.profile,
      email: this.props.user.user.email,
    });
    console.log(this.props);
  }

  onImageChange = (image, file) => {
    this.setState({
      photoURL: image,
      file: file,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    const { profile, auth, changeError, user } = this.props;
    if (this.props.match.params.id !== auth.uid) {
      //nije ulogovan user nego gleda profil ili je pogodjen slucajno link profila tj uid ne dati da se menjaju podaci
    }
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    //menjanje podataka na profilu
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3 center-align">
            Profile for user: {profile.firstName} {profile.lastName}
          </h5>
          <div className="input-field">
            <label className="active" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={this.handleChange} />
      </div> */}
          <div className="input-field">
            <label className="active" htmlFor="firstName">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <span className="helper-text"></span>
          </div>
          <div className="input-field">
            <label className="active" htmlFor="lastName">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <span className="helper-text"></span>
          </div>
          <ImageUpload onImageChange={this.onImageChange} />
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Change data
            </button>
            <div className="red-text center">
              {changeError ? <p>{changeError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    changeError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    getCurrentUser: () => dispatch(getCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
