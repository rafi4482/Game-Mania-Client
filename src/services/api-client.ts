import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e7ec5d82d21d410ba034d7ee85d59137",
  },
});