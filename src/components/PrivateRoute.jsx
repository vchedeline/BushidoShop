import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { useAuthValue } from "../utils/AuthContext";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { currentUser } = useAuthValue();
  if (!currentUser) {
    navigate("/user/login");
    return null;
  }

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRoute;
