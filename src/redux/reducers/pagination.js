import { CHANGE_PAGE, INITIATE_PAGES } from "../constants";

const initialState = {
  total: 0,
  currPage: 1,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case INITIATE_PAGES: {
      return { ...state, ...action.payload };
    }
    case CHANGE_PAGE: {
      return { ...state, currPage: action.payload };
    }
    default:
      return state;
  }
}
