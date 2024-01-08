import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
