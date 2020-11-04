import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions";

class SignIn extends React.Component {
  state = {
    password: "",
    email: "",
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
    console.log(this.props);
    this.props.signIn(this.state);
  };
  render() {
    document.title = "Atila managing app - Sign in";
    //console.log(this.state);
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SignIn in</button>
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
  console.log(state);
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (cred) => dispatch(signIn(cred)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
