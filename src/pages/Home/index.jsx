import React from "react";

import "./home.scss";

// components
import Header from "../../components/Header/HomePageHeader";

// actions

const Home = (props) => {
  console.log("props: ", props);

  return (
    <div className="home-wrapper">
      <Header />
      <h1 className="text-center">HOME PAGE</h1>
    </div>
  );
};

export default Home;
