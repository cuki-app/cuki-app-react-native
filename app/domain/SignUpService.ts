import StorageUtil, {StorageKey} from "./StorageUtil";
import api, {ApiResponse} from "../api/api";

export class RestoreService {
    static async restore(): Promise<string> {
        return StorageUtil.getString(StorageKey.USER_TOKEN)
    }
}

export class SignUpService {
    static async checkEmailDuplication(email: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (!(email == null || email == '')) {
                api.post<ApiResponse<boolean>>("/members/sign-up/email", {"email": email})
                    .then(res => resolve(res.result))
                    .catch(err => reject(err))
            }
        })
    }

    static async requestVerificationCode(email: string): Promise<boolean> {
        return new Promise<boolean>(((resolve, reject) => {
            if (!(email == null || email == '')) {
                api.post<ApiResponse<boolean>>("/members/sign-up/verification-code", {"email": email})
                    .then(res => resolve(res.result))
                    .catch(err => reject(err))
            }
        }))
    }
}
