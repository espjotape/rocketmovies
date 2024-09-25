import axios from "axios"

export const api = axios.create ({
  baseURL: "https://apimovies-gb1b.onrender.com"
})