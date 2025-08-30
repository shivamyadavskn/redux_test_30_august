import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Change to your API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
