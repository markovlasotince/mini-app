import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { reloginUserAction } from "../../../store/actions/auth";

const AutomaticLogin = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const authToken = localStorage.getItem("token") || "";
  const dispatch = useDispatch();

  if (!isAuthenticated && authToken !== "") {
    dispatch(reloginUserAction());
  }

  return <React.Fragment />;
};

export default AutomaticLogin;
