import axios from "axios";

export const api = axios.create({
  baseURL: "www.tabecai-api.com/"
})