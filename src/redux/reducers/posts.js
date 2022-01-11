import { GET_POSTS_START } from "../constants";

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
    default:
      return state;
  }
}
