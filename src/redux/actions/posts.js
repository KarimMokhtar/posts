import { message } from "antd";
import { getPostsApi, deletePostsApi, getPostApi, editPostApi } from "../../api";
import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  DELETE_POSTS_START,
  DELETE_POSTS_FAILURE,
  DELETE_POSTS_SUCCESS,
  GET_POST_START,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  EDIT_POSTS_START,
  EDIT_POSTS_FAILURE,
  EDIT_POSTS_SUCCESS,
} from "../constants";

//get single post
export const getPostStart = () => ({
  type: GET_POST_START,
});

export const getPostFailure = error => {
  return {
    payload: error,
    type: GET_POST_FAILURE,
  };
};

export const getPostSuccess = data => {
  return {
    payload: data,
    type: GET_POST_SUCCESS,
  };
};

export const getPost = id => async dispatch => {
  dispatch(getPostStart());
  try {
    const res = await getPostApi(id);
    return dispatch(getPostSuccess(res.data));
  } catch (err) {
    return dispatch(getPostFailure("Something went wrong..."));
  }
};

// get all posts
export const getPostsStart = () => ({
  type: GET_POSTS_START,
});

export const getPostsFailure = error => {
  return {
    payload: error,
    type: GET_POSTS_FAILURE,
  };
};

export const getPostsSuccess = data => {
  return {
    payload: data,
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

// delete post function
export const deletePostStart = () => ({
  type: DELETE_POSTS_START,
});

export const deletePostFailure = error => {
  return {
    payload: error,
    type: DELETE_POSTS_FAILURE,
  };
};

export const deletePostSuccess = id => {
  return {
    payload: id,
    type: DELETE_POSTS_SUCCESS,
  };
};

export const deletePost = id => async dispatch => {
  dispatch(deletePostStart());
  try {
    await deletePostsApi(id);
    message.success("Post deleted successfully!");
    return dispatch(deletePostSuccess(id));
  } catch (err) {
    message.success("Something went wrong...");
    return dispatch(deletePostFailure("Something went wrong..."));
  }
};

// edit post
export const editPostStart = () => ({
  type: EDIT_POSTS_START,
});

export const editPostFailure = error => {
  return {
    payload: error,
    type: EDIT_POSTS_FAILURE,
  };
};

export const editPostSuccess = () => {
  return {
    type: EDIT_POSTS_SUCCESS,
  };
};

export const editPost = post => async dispatch => {
  dispatch(editPostStart());
  try {
    await editPostApi(post);
    message.success("Post edited successfully!");
    return dispatch(editPostSuccess());
  } catch (err) {
    message.error("Something went wrong, please try again");
    return dispatch(editPostFailure("Something went wrong..."));
  }
};
