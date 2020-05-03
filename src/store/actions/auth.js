/* eslint-disable no-use-before-define */
// import axios from "axios";
// import jwtDecode from "jwt-decode";

import actionTypes from "../actionTypes";

export const loggedUser = () => ({
  type: actionTypes.LOGIN_USER,
  loggedIn: true,
});

export const logoutUser = () => ({
  type: actionTypes.LOGOUT_USER,
  loggedIn: false,
});

export const notLoggedUserError = (error) => ({
  type: actionTypes.LOGIN_USER_ERROR,
  error,
});

const loginUserSuccessAction = (dispatch, token) => {
  localStorage.setItem("token", token);
  dispatch(loggedUser());
};

export const reloginUserAction = () => (dispatch, getState) => {
  const { isAuthenticated } = getState().auth;
  const authToken = localStorage.getItem("token") || "";

  if (!isAuthenticated && authToken) {
    dispatch(loggedUser());
  }
};

export const logoutUserAction = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutUser());
};

export const loginUserAction = (email, password) => (dispatch) => {
  // API call and in then part this function is called
  loginUserSuccessAction(dispatch, "tokentoken");
};

export const refreshTokenAction = () => (dispatch) => {
  // API call and in then part this function is called
  loginUserSuccessAction(dispatch, "tokentoken");
};
