import {SignUpParam} from "../contexts/AuthenticationContext";
import api, {ApiResponse} from "../api/api";

export const SIGN_UP_ENDPOINT = '/auth'

export type SignUpToken = {
    accessToken: string
    refreshToken: string
}

export type SignUpResult = {
    email: string,
    nickname: string,
    authority: string
}


export class SignUpService {
    static async requestSignUp(signUpParam: SignUpParam): Promise<SignUpResult> {
        console.debug(`SignUpService#requestSignUp: ${signUpParam.email}, ${signUpParam.magicCode}`)
        return new Promise<SignUpResult>((resolve, reject) => {
            api.post<ApiResponse<SignUpResult>>("/members/sign-up", {
                email: signUpParam.email,
                verificationCode:  signUpParam.magicCode
            })
                .then(res => resolve(res.result))
                .catch(err => reject(err))
        })
    }
}
