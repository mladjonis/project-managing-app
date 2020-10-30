import { NavLink } from "react-router-dom";

const SignInLink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New task</NavLink>
      </li>
      <li>
        <NavLink to="/">Log out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          Initials
        </NavLink>
      </li>
    </ul>
  );
};

export default SignInLink;
