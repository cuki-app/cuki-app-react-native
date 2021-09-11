import React from "react";
import CukiContainer from "../../components/CukiContainer";
import {Button, Text} from "react-native";
import {AuthContext} from "../../contexts/AuthenticationContext";

const PersonalSettingScreen = () => {
    const {signOut} = React.useContext(AuthContext)
    return (
        <CukiContainer>
            <Text>개인정보 화면</Text>
            <Button
                title={"push to sign out"}
                onPress={() => {
                    signOut()
                }}
            />
        </CukiContainer>
    )
}

export default PersonalSettingScreen;
