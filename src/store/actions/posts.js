import axios from "axios";
import actionTypes from "../actionTypes";

export const getPostsRequest = () => ({
  type: actionTypes.GET_POSTS_REQUEST,
  //   loading: true,
});

export const getPostsSuccess = (data) => ({
  type: actionTypes.GET_POSTS_SUCCESS,
  posts: data,
});

export const getPostsError = () => ({
  type: actionTypes.GET_POSTS_ERROR,
  errorMessage: "Could not retrieve posts",
});

export const getPostsAction = () => (dispatch) => {
  dispatch(getPostsRequest());
  axios
    .get("http://jsonplaceholder.typicode.com/posts?_limit=20", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch(getPostsSuccess(response.data));
    })
    .catch(() => {
      dispatch(getPostsError());
    });
};
