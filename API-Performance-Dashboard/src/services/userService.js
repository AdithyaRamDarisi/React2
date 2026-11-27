import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// GET - Fetch using Fetch API
export const fetchUsers = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
};

// GET - Fetch using Axios
export const fetchUsersAxios = async () => {
  const response = await api.get("/");
  return response.data;
};

// POST - Create user
export const createUser = async (user) => {
  const response = await api.post("/", user);
  return response.data;
};

// PUT - Replace user
export const replaceUser = async (id, user) => {
  const response = await api.put(`/${id}`, user);
  return response.data;
};

// PATCH - Partially update user
export const updateUser = async (id, user) => {
  const response = await api.patch(`/${id}`, user);
  return response.data;
};

// DELETE - Delete user
export const deleteUser = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};