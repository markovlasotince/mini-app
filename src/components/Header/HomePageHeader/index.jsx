import React from "react";
import { Link } from "react-router-dom";

import "./homePageHeader.scss";

const HomePageHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">LOGO</div>
      <div className="login-button-wrapper">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default HomePageHeader;
