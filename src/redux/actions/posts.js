import { getPostsApi } from "../../api";
import { GET_POSTS_START, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from "../constants";

export const getPostsStart = () => ({
  type: GET_POSTS_START,
});

export const getPostsFailure = error => {
  return {
    payload: error,
    type: GET_POSTS_FAILURE,
  };
};

export const getPostsSuccess = error => {
  return {
    payload: error,
    type: GET_POSTS_SUCCESS,
  };
};

export const getPosts = () => async dispatch => {
  dispatch(getPostsStart());
  try {
    const res = await getPostsApi();
    return dispatch(getPostsSuccess(res.data));
  } catch (err) {
    return dispatch(getPostsFailure("Something went wrong..."));
  }
};
