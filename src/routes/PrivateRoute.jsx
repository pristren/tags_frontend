/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  return !user ? (
    <Navigate to={`/login`} state={{ from: location }} />
  ) : (
    children
  );
};

export default PrivateRoute;
