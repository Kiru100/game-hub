import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5ed488eb04d24e2a9c6ad5fafaf10a3c",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

