import axios from "axios";

export const customFetch = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": true,
  },
});
