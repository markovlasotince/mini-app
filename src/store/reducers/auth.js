import actionTypes from '../actionTypes';

const initialState = {
  loggedIn: false,
  isAuthenticated: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        loggedIn: action.loggedIn,
        isAuthenticated: true,
        error: null,
      };

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        loggedIn: action.loggedIn,
        isAuthenticated: false,
        error: null,
      };

    case actionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        loggedIn: false,
        isAuthenticated: false,
        error: action.error,
      };
    default:
      return state;
  }
};
