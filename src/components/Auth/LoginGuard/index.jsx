import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function (ComposedComponent) {
  const LoginGuard = (props) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
      <div>
        {!isAuthenticated ? (
          <ComposedComponent {...props} />
        ) : (
          <Redirect to="/admin" />
        )}
      </div>
    );
  };

  LoginGuard.propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  LoginGuard.defaultProps = {
    isAuthenticated: undefined,
  };

  return LoginGuard;
}
