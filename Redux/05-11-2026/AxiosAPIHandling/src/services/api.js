import axios from "axios";

// Create Axios Instance
const api = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

// READ - GET USERS
export const getUsers = () => {
    return api.get("/users");
};

// CREATE - ADD USER
export const createUser = (userData) => {
    return api.post("/users", userData);
};

// UPDATE - EDIT USER
export const updateUser = (id, userData) => {
    return api.put(`/users/${id}`, userData);
};

// DELETE - REMOVE USER
export const deleteUser = (id) => {
    return api.delete(`/users/${id}`);
};

export default api;