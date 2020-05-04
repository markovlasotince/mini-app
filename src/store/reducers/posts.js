import actionTypes from '../actionTypes';

const initialState = {
  posts: [],
  errorMessage: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        posts: [],
      };
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case actionTypes.GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
        posts: [],
      };
    default:
      return state;
  }
};

