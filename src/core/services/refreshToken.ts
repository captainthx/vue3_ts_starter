import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const refreshToken = async () => {
  axios.interceptors.request.use(
    (config: any) => {
      const token = window.localStorage.getItem("tk");
      if (token) config.headers.common.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
