import axios from "axios";

const nodeClient = axios.create({
  baseURL: "http://localhost:4001/api/v1",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default nodeClient;