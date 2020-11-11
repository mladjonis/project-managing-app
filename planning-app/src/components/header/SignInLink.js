import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions";
import UserProfile from "../profile/UserProfile";

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
        <NavLink
          to={`/profile/${props.uid}`}
          className="btn btn-floating lighten-1"
        >
          {/* {props.profile.initials} */}
          <img
            className="profile-image"
            src={props.profile.imageFullURL}
            alt="image"
          />
          {/* <UserProfile /> */}
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
