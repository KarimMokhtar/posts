import axios from "./axios";

export const getPostsApi = () =>
  axios({
    url: `/posts`,
    method: "GET",
  });
