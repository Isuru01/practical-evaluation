import axios from "axios";

const AxiosInstance = () => {
  const instance = axios.create({
    baseURL: "http://157.245.61.32:7979/",
    timeout: 3000,
  });

  return instance;
};

export default AxiosInstance;
