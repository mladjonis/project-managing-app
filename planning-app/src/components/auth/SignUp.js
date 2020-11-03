import React from "react";

class SignUp extends React.Component {
  state = {
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  };

  componentDidMount() {
    document.title = "Atila managing app - Sign up";
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    //console.log(this.state);
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  render() {
    console.log(this.state);
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
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
