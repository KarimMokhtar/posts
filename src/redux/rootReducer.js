import { combineReducers } from "redux";

import postsReducer from "./reducers/posts.js";
import paginationReducer from "./reducers/pagination.js";

const rootReducer = combineReducers({
  posts: postsReducer,
  pagination: paginationReducer,
});

export default rootReducer;
