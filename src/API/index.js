import axios from "axios";

export function get(url, data) {
  const endpoint = url + data;
  return axios.get(endpoint);
}
