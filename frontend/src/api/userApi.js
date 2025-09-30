import axiosClient from "./axiosClient";

const userApi = {
    create: (data)=> axiosClient.create("/users", data),
    getAll: ()=> axiosClient.get("/users"),
    getById: (id)=> axiosClient.get(`/users/${id}`),
    update: (id, data)=>axiosClient.put(`/users/${id}`, data),
    delete: (id)=>axiosClient.delete(`/users/${id}`),
}

export default userApi;