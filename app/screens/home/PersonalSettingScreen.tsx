import React, {useEffect} from "react";
import CukiContainer from "../../components/CukiContainer";
import {Button} from "react-native";
import {AuthContext} from "../../contexts/AuthenticationContext";

const PersonalSettingScreen = ({navigation}) => {
    const {signOut} = React.useContext(AuthContext)

    return (
        <CukiContainer>
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
