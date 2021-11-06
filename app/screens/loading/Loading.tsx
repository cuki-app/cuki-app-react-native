import React, {useEffect} from "react";
import {Text} from "react-native";
import CukiContainer from "../../components/CukiContainer";
import {AuthContext} from "../../contexts/AuthenticationContext";
import {RestoreService} from "../../domain/SignUpService";

const LoadingScreen = () => {
    const {restore} = React.useContext(AuthContext)

    useEffect(() => {
        const bootstrapAsync = async () => {
            RestoreService
                .restore()
                .then(token => {
                    if (token != null) {
                        console.log(`restored token: ${token.refreshToken}`)
                    }
                    restore(token?.refreshToken)
                })
                .catch(error => {
                    console.error(error)
                    restore(null)
                })
        }
        bootstrapAsync()
    })

    return (
        <CukiContainer>
            <Text>Loading ...</Text>
        </CukiContainer>
    )
}

export default LoadingScreen
