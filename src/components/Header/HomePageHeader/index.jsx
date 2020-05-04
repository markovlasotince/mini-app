import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./homePageHeader.scss";

const HomePageHeader = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div className="header-wrapper">
      <div className="logo">LOGO</div>
      <div className="login-button-wrapper">
        {!isAuthenticated ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/admin">Go back to admin panel</Link>
        )}
      </div>
    </div>
  );
};

export default HomePageHeader;
