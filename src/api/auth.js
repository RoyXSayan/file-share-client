import API_BASE_URL from "@/config";
import axios from "axios";

const API = axios.create({
  baseURL: `${API_BASE_URL}/api/auth`, // adjust to your backend
});

// signup API
export const signupUser = async (userData) => {
  return await API.post("/signup", userData);
};

// login API
export const loginUser = async (credentials) => {
  return await API.post("/login", credentials);
};
