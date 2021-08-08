import React from "react";
import {AuthContext} from "../../contexts/AuthenticationContext";
import CukiContainer from "../../components/CukiContainer";
import {Button, Text} from "react-native";

// 여긴 tab view
const HomeScreen = () => {
    const {signOut} = React.useContext(AuthContext)
    return (
        <CukiContainer>
            <Text>대충 로그인 된거</Text>
            <Button
                title={"push to sign out"}
                onPress={() => {
                    signOut()
                }}
            />
        </CukiContainer>
    )
}

export default HomeScreen
