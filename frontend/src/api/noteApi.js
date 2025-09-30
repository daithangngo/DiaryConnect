import axiosClient from "./axiosClient";

const noteApi = {
  getAll: (userId) => axiosClient.get(`/users/${userId}/notes`),
  create: (userId, data) => axiosClient.post(`/users/${userId}/notes`, data),
  getById: (noteId) => axiosClient.get(`/users/notes/${noteId}`),
  update: (noteId, data) => axiosClient.put(`/users/notes/${noteId}`, data),
  delete: (noteId) => axiosClient.delete(`/users/notes/${noteId}`),
};

export default noteApi;
