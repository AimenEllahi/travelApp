import axios from "axios";

export default axios.create({
  baseURL: "https://api.content.tripadvisor.com/api/v1/location/",
  headers: { accept: "application/json" },
});
