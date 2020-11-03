import { NavLink } from "react-router-dom";

const SignOutLink = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignOutLink;
