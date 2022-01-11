import {
  GET_POSTS_FAILURE,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
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

const initialState = {
  posts: [],
  selectedPost: null,
  error: null,
  loading: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    // get posts list
    case GET_POSTS_START: {
      return { ...state, error: null, loading: true };
    }
    case GET_POSTS_FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }
    case GET_POSTS_SUCCESS: {
      return { ...state, posts: action.payload, loading: false };
    }
    // delete post
    case DELETE_POSTS_START: {
      return { ...state, error: null, loading: true };
    }
    case DELETE_POSTS_FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }
    case DELETE_POSTS_SUCCESS: {
      const newPosts = state.posts.filter(post => post.id !== action.payload);
      return { ...state, posts: newPosts, loading: false };
    }
    // get single post
    case GET_POST_START: {
      return { ...state, error: null, loading: true };
    }
    case GET_POST_FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }
    case GET_POST_SUCCESS: {
      return { ...state, selectedPost: action.payload, loading: false };
    }
    // edit post
    case EDIT_POSTS_START: {
      return { ...state, error: null, loading: true };
    }
    case EDIT_POSTS_FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }
    case EDIT_POSTS_SUCCESS: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
}
