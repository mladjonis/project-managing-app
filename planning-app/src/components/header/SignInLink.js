import { NavLink } from "react-router-dom";

const SignInLink = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/">New task</NavLink>
      </li>
      <li>
        <NavLink to="/">Log out</NavLink>
      </li>
      <li>
        {/* Initials of full name we will see*/}
        <NavLink to="/" className="btn btn-floating lighten-1">
          ML
        </NavLink>
      </li>
    </ul>
  );
};

export default SignInLink;
