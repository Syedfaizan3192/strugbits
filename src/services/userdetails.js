import { apiUrl } from "../constants/constants";
import api from "./index";

export const getAllUsers = (params) => api.get(`${apiUrl.user}`, { params });
