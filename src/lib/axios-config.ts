import Axios from "axios";

const axios = Axios.create({});

const serverUrl = import.meta.env.WXT_VT_URL;
export const baseURL = serverUrl ? `${serverUrl}/api/v3` : "/api";

axios.defaults.timeout = 120000;
axios.interceptors.request.use(
  async (config) => {
    config.baseURL = baseURL;
    config.headers["Accept"] = "application/json";
    config.headers["x-apikey"] = import.meta.env.WXT_VT_API_KEY;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axios };
