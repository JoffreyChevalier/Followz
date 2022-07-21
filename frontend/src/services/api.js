import axios from "axios";

const API_URL = "http://localhost:5000";

axios.defaults.withCredentials = true;

export const login = async (data) => {
  return (await axios.post(`${API_URL}/login`, data)).data;
};

export const fetchMe = async (data) => {
  try {
    return (await axios.get(`${API_URL}/me`, data)).data;
  } catch (err) {
    return null;
  }
};
