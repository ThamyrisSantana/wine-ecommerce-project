import axios from "axios";

export const wineApi = axios.create({
  baseURL: "https://wine-back-test.herokuapp.com/",
  timeout: 10000,
});
