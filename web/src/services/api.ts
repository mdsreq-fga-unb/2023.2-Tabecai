import axios from "axios";

export const api = axios.create({
  baseURL: "https://ec2-15-228-243-0.sa-east-1.compute.amazonaws.com/"
})