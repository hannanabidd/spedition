import axios from "axios";

export const AxiosBase = axios.create({
  baseURL: "/api",
});

export const setAuthToken = (token) => {
  if (token) {
    AxiosBase.defaults.headers.common["x-access-token"] = token;

    return AxiosBase;
  } else {
    return AxiosBase.defaults.headers;
  }
};
