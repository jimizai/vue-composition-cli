import axios from "axios";
import { message } from "ant-design-vue";
import queryString from "query-string";
import { BASE_URL } from "./config";

interface FetchConfig {
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: Record<string, any>;
}

axios.defaults.timeout = 5000;

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    message.error("加载超时");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  data => {
    return data;
  },
  error => {
    message.error("加载失败");
    return Promise.reject(error);
  }
);

export function fetch(config: FetchConfig) {
  // NProgress.set(0.7);
  const token = localStorage.getItem("token") || "";
  const uid = localStorage.getItem("uid") || "";
  return new Promise(resolve => {
    const instance = axios.create({
      // 请求超时
      timeout: 5000,
      headers: {
        token,
        mid: uid
      },
      // 定义请求根目录
      baseURL: BASE_URL
    });
    instance(config)
      .then(res => {
        if (res.data.errno === 401) {
          console.log("401");
          localStorage.clear();
          window.location.href = "#/login";
        }
        if (res.data.errno !== 0) {
          throw res.data.result.message;
        }
        resolve(res.data);
        // 失败后执行的函数
      })
      .catch(err => {
        message.error(err);
        console.log(err);
      });
  });
}

export function get(url: string, data?: Record<string, any>) {
  if (data) {
    // eslint-disable-next-line
    url += `?${queryString.stringify(data)}`;
  }
  return fetch({
    url,
    method: "get"
  });
}
export function post(url: string, data: Record<string, any>) {
  return fetch({
    url,
    method: "post",
    data
  });
}
export function del(url: string) {
  return fetch({
    url,
    method: "delete"
  });
}
