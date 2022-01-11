import { GET_POSTS_FAILURE, GET_POSTS_START, GET_POSTS_SUCCESS } from "../constants";

const initialState = {
  posts: [],
  selectedPost: null,
  error: null,
  loading: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_START: {
      return { ...state, error: null, loading: true };
    }
    case GET_POSTS_FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }
    case GET_POSTS_SUCCESS: {
      return { ...state, posts: action.payload, loading: false };
    }
    default:
      return state;
  }
}
