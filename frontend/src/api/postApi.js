import axiosClient from "./axiosClient";

const noteApi = {
  getAll: (userId) => axiosClient.get(`/users/${userId}/posts`),
  create: (userId, data) => axiosClient.post(`/users/${userId}/posts`, data),
  getById: (postId) => axiosClient.get(`/users/posts/${postId}`),
  update: (postId, data) => axiosClient.put(`/users/post/${postId}`, data),
  delete: (postId) => axiosClient.delete(`/users/posts/${postId}`),
};

export default noteApi;
