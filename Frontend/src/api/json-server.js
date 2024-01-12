import axios from "axios";

export default axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
