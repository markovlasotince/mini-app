import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function (ComposedComponent) {
  const AuthGuard = (props) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
      <div>
        {isAuthenticated ? (
          <ComposedComponent {...props} />
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  };

  AuthGuard.propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  AuthGuard.defaultProps = {
    isAuthenticated: undefined,
  };

  return AuthGuard;
}
