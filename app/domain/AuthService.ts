import api, {ApiResponse} from "../api/api";

export class AuthService {
    static async checkAccountExistence(email: string): Promise<boolean> {
        return new Promise<boolean>(((resolve, reject) => {
            if (!(email == null || email == '')) {
                api.post<ApiResponse<boolean>>("/auth/login/email", {"email": email})
                    .then(res => resolve(res.result))
                    .catch(err => reject(err))
            }
        }))
    }

    static async requestLoginVerificationCode(email: string): Promise<boolean> {
        return new Promise<boolean>(((resolve, reject) => {
            if (!(email == null || email == '')) {
                api.post<ApiResponse<boolean>>("/auth/login/verification-code", {"email": email})
                    .then(res => resolve(res.result))
                    .catch(err => reject(err))
            }
        }))
    }
}
