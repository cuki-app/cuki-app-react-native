import React from "react";

export type SignInParam = {
    email: string
    magicCode: string
}

export type SignUpParam = {
    email: string
}

export const AuthContext = React.createContext({
    signIn: async (param: SignInParam) => {},
    signOut: () => {},
    signUp: async (param: SignUpParam) => {}
})

