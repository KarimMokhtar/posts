import axios from "./axios";

export const getPostsApi = () =>
  axios({
    url: "/posts",
    method: "GET",
  });

export const deletePostsApi = id =>
  axios({
    url: `/posts/${id}`,
    method: "DELETE",
  });
