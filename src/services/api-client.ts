import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5ed488eb04d24e2a9c6ad5fafaf10a3c",
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class APIClient<T>{
	endpoint: string;

	constructor(endpoint: string){
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) =>{
		return axiosInstance	
			.get<FetchResponse<T>>(this.endpoint, config)
			.then(res=>res.data);
	}

}

export default APIClient;

