import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const Auth = ({ children, authNeed }) => {
  const { token } = useContext(AuthContext);
  let location = useLocation();

  if (!token && authNeed) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else if (token && !authNeed) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default Auth;
