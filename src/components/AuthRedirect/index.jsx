import { Link } from "react-router-dom";

const AuthRedirect = ({ message, linkTo, linkText }) => {
  return (
    <span>
      {message} <Link to={linkTo}>{linkText}</Link>
    </span>
  );
};

export default AuthRedirect;
