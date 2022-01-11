import { GET_POSTS_START, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from "../actions";

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
};
