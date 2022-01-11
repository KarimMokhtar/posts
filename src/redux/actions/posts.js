import { getPostsApi, deletePostsApi, getPostApi } from "../../api";
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
} from "../constants";
import { initiatePages } from "./pagination";

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
    dispatch(initiatePages({ total: res.data.length }));
    return dispatch(getPostsSuccess(res.data));
  } catch (err) {
    return dispatch(getPostsFailure("Something went wrong..."));
  }
};

export const deletePostStart = () => ({
  type: DELETE_POSTS_START,
});

export const deletePostFailure = error => {
  return {
    payload: error,
    type: DELETE_POSTS_FAILURE,
  };
};

export const deletePostSuccess = () => {
  return {
    type: DELETE_POSTS_SUCCESS,
  };
};

export const deletePost = id => async dispatch => {
  dispatch(deletePostStart());
  try {
    await deletePostsApi(id);
    return dispatch(deletePostSuccess());
  } catch (err) {
    return dispatch(deletePostFailure("Something went wrong..."));
  }
};
