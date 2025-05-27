import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lung-screening.onrender.com/users/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
