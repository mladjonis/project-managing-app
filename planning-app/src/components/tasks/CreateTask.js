import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createTask } from "../../actions";

class CreateTask extends React.Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(this.props);
    this.props.createTask(this.state);
    this.props.history.push("/");
  };
  render() {
    document.title = "Atila managing app - Create task";
    //console.log(this.state);
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create task</h5>
          <div className="input-field">
            <label htmlFor="tite">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Task Details</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
