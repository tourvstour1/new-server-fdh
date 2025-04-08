import axios, { AxiosInstance } from "axios";
import { configDotenv } from "dotenv";
configDotenv()
export const instance: AxiosInstance = axios.create({
  baseURL: process.env.URL_SERVER_HOSPITAL,
  headers: { "Content-Type": "application/json" },
});
