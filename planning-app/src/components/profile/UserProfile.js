import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateUser, getCurrentUser } from "../../actions";
import ImageUpload from "../image-upload/ImageUpload";

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
    //this.props.updateUser(this.state);
  };

  componentDidMount() {
    document.title = "Atila managing app - User profile";
    console.log(this.props);
    this.setState({
      ...this.state,
      ...this.props.profile,
    });
    console.log({ ...this.state, ...this.props.profile });
    console.log(this.state);
    //this.props.getCurrentUser();
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
    const { profile, auth, changeError } = this.props;
    console.log(this.state);
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
          <h5 className="grey-text text-darken-3">
            {profile.firstName} {profile.lastName}
          </h5>
          {/* <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={auth.email} onChange={this.handleChange} />
      </div> */}
          {/* <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={this.handleChange} />
      </div> */}
          <div className="input-field">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
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
