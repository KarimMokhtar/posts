import { getPostsApi, deletePostsApi } from "../../api";
import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  DELETE_POSTS_START,
  DELETE_POSTS_FAILURE,
  DELETE_POSTS_SUCCESS,
} from "../constants";
import { initiatePages } from "./pagination";

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
