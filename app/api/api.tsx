import axios, {AxiosResponse} from "axios";

export class ApiResponse<T> {
    statusCode: number
    result?: T
    timestamp: Date

    constructor(statusCode: number, result: T, timestamp: Date) {
        this.statusCode = statusCode;
        this.result = result;
        this.timestamp = timestamp;
    }
}

const BASE_URL = "https://cuki.io"

class Api {
    async get<T>(path: string): Promise<ApiResponse<T>> {
        const url = Api.buildUrl(path)
        return axios.get(url)
    }

    async post<T>(path: string): Promise<AxiosResponse> {
        const url = Api.buildUrl(path)
        return axios.post<ApiResponse<T>>(url)
    }

    private static buildUrl(uri: string) {
        return `${BASE_URL}${uri}`
    }
}

const api = new Api()

export default api
