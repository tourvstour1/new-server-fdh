import axios, { AxiosInstance } from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: "http://183.88.219.85:5200",

  headers: { "Content-Type": "application/json" },
});
