import { CHANGE_PAGE, INITIATE_PAGES } from "../constants";

export const initiatePages = meta => {
  return {
    payload: meta,
    type: INITIATE_PAGES,
  };
};

export const changePage = page => {
  return {
    payload: page,
    type: CHANGE_PAGE,
  };
};
