import axios from "./axios";

export const getPostApi = id =>
  axios({
    url: `/posts/${id}`,
    method: "GET",
  });

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

export const editPostApi = post =>
  axios({
    url: `/posts/${post.id}`,
    method: "POST",
    body: post,
  });
