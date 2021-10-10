import React from "react";

export type SignInParam = {
    email: string
    magicCode: string
}

export type SignUpParam = {
    email: string
    magicCode: string
}

export const AuthContext = React.createContext({
    restore: async (token: string | null) => {},
    signIn: async (param: SignInParam) => {},
    signOut: () => {},
    signUp: () => {}
})

