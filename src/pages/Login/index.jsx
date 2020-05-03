import React from "react";
import { useDispatch } from "react-redux";

// components

// actions
import { loginUserAction } from "../../store/actions/auth";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUserAction("admin", "admin"));
  };

  return (
    <div className="">
      <h1>Login PAGE</h1>
      <button onClick={handleLogin}>Click here to login</button>
    </div>
  );
};

export default Login;
