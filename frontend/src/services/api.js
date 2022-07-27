import axios from "axios";

const API_URL = "http://localhost:5000";

axios.defaults.withCredentials = true;

export const login = async (data) => {
  return (await axios.post(`${API_URL}/login`, data)).data;
};

export const logout = async (data) => {
  return (await axios.delete(`${API_URL}/logout`, data)).data;
};

export const fetchMe = async (data) => {
  try {
    return (await axios.get(`${API_URL}/me`, data)).data;
  } catch (err) {
    return null;
  }
};

export const createUser = async (data) => {
  return (await axios.post(`${API_URL}/users`, data)).data;
};

export const fecthApplications = async (authorId) => {
  return (await axios.get(`${API_URL}/applications/${authorId}`)).data;
};

export const createApplications = async (data, authorId) => {
  return (await axios.post(`${API_URL}/applications/${authorId}`, data)).data;
};
