import { combineReducers } from "redux";

import postsReducer from "./reducers/posts.js";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
