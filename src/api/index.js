import axios from "axios";

export default axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  params: { apiKey: process.env.EXPO_PUBLIC_API_KEY },
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
