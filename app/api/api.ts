import axios, {AxiosResponse} from "axios";
import StorageUtil, {StorageKey} from "../domain/StorageUtil";

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

    async setCertificationHeader(accessToken: string) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }

    async get<T>(path: string): Promise<ApiResponse<T>> {
        const tokenResponse = await StorageUtil.getObject(StorageKey.USER_TOKEN)
        if (tokenResponse != null) {
            this.setCertificationHeader(tokenResponse.accessToken)
        }
        const url = Api.buildUrl(path)
        return new Promise((resolve, reject) => {
            axios.get<AxiosResponse<ApiResponse<T>>>(url)
                .then(result => resolve(result.data))
                .catch(error => reject(error.response.data))
        })
    }

    async post<T>(path: string, param: any): Promise<ApiResponse<T>> {
        const tokenResponse = await StorageUtil.getObject(StorageKey.USER_TOKEN)
        if (tokenResponse != null) {
            this.setCertificationHeader(tokenResponse.accessToken)
        }
        const url = Api.buildUrl(path)
        return new Promise((resolve: any, reject) => {
            axios.post<AxiosResponse<ApiResponse<T>>>(url, param)
                .then(result => resolve(result.data))
                .catch(error => reject(error.response.data))
        })
    }

    private static buildUrl(uri: string) {
        return `${BASE_URL}${uri}`
    }
}

const api = new Api()

export default api
