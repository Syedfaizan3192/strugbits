import axios from "axios";
import { constants } from "../constants/constants";

axios.defaults.baseURL = constants.BASE_URL;

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error:", error);
    return Promise.reject(error);
  }
);

export default api;
