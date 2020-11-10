import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../actions";
import ImageUpload from "../image-upload/ImageUpload";

class SignUp extends React.Component {
  state = {
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    photoURL: "",
    file: null,
  };

  componentDidMount() {
    document.title = "Atila managing app - Sign up";
  }

  onImageChange = (image, file) => {
    // console.log(image);
    // console.log(file);
    this.setState({
      photoURL: image,
      file: file,
    });
    //console.log(this.state);
    //console.log({ ...this.state, photoURL: image });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    //console.log(this.state);
  };
  onSubmit = (e) => {
    e.preventDefault();
    //console.log(e);
    console.log(this.state);
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;

    if (auth.uid) {
      return <Redirect to="/" />;
    }
    //console.log(this.props);
    //console.log(this.state);
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <ImageUpload onImageChange={this.onImageChange} />
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
