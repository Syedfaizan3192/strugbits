import { apiUrl } from "../constants/Constants";
import api from "./index"


export const getAllUsers = (params) => api.get(`${constant.VER}${apiUrl.user}?ordering=${ordering_params.user_ordering_param}`, { params });
