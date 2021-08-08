import React, {useEffect} from "react";
import {Text} from "react-native";
import CukiContainer from "../../components/CukiContainer";

const LoadingScreen = () => {
    useEffect(() => {
        console.log('Component has been mounted')
    })

    return (
        <CukiContainer>
            <Text>Loading ...</Text>
        </CukiContainer>
    )
}

export default LoadingScreen
