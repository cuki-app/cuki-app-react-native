import api, {ApiResponse} from "../api/api";

export type TokenResponse = {
    accessToken: string,
    accessTokenExpiresIn: number,
    refreshToken: string
}

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
        return new Promise<boolean>((resolve, reject) => {
            if (!(email == null || email == '')) {
                api.post<ApiResponse<boolean>>("/auth/login/verification-code", {"email": email})
                    .then(res => resolve(res.result))
                    .catch(err => reject(err))
            }
        })
    }

    static async login(email: string, verificationCode: string): Promise<TokenResponse> {
        return new Promise<TokenResponse>((resolve, reject) => {
            if (email != null && email != '' && verificationCode != null) {
                api.post<ApiResponse<TokenResponse>>("/auth/login", {
                    "email": email,
                    "verificationCode": verificationCode
                })
                    .then(res => {
                        api.setCertificationHeader(res.result?.accessToken)
                        resolve(res.result)
                    })
                    .catch(err => reject(err))
            }
        })
    }
}
