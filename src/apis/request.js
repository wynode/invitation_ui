import axios from "axios";
import { BACK_API } from "../config";

const $http = axios.create({
  baseURL: BACK_API,
  timeout: 3 * 60 * 1000, // 3 minutes
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

$http.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error);
  }
);

$http.interceptors.response.use(
  response => response.data,
  error => {
    // if (error.response.status === 401) {
    //   return router.replace({
    //     path: '/accounts/login',
    //     query: {
    //       redirect: router.currentRoute.fullPath,
    //     },
    //   })
    // }
    return Promise.reject(error);
  }
);

export default $http;
