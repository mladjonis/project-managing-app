import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions";

const SignInLink = (props) => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/create">New task</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={props.signOut}>
          Log out
        </NavLink>
      </li>
      <li>
        {/* Initials of full name we will see*/}
        <NavLink to="/" className="btn btn-floating lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/chat" className="right">
          <i className="medium material-icons">chat</i>
        </NavLink>
      </li> */}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignInLink);
