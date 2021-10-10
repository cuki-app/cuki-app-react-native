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

const BASE_URL = "https://api.cuki.io"

class Api {
    async get<T>(path: string): Promise<ApiResponse<T>> {
        const url = Api.buildUrl(path)
        return axios.get(url)
    }

    async post<T>(path: string, param: any): Promise<ApiResponse<T>> {
        const url = Api.buildUrl(path)
        return new Promise((resolve: any, reject) => {
            axios.post<AxiosResponse<ApiResponse<T>>>(url, param)
                .then(result => resolve(result.data))
                .catch(error => reject(error))
        })
    }

    private static buildUrl(uri: string) {
        return `${BASE_URL}${uri}`
    }
}

const api = new Api()

export default api
