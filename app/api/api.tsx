import axios from "axios";

class ApiResponse<T> {
    readonly statusCode: number
    readonly result?: T
    readonly timestamp: Date

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

    async post<T>(path: string): Promise<ApiResponse<T>> {
        const url = Api.buildUrl(path)
        return axios.post(url)
    }

    private static buildUrl(uri: string) {
        return `${BASE_URL}${uri}`
    }
}

const api = new Api()

export default api