import React from "react";
import {AuthContext} from "../../contexts/AuthenticationContext";
import CukiContainer from "../../components/CukiContainer";
import {Button, Text} from "react-native";

// 여긴 tab view
const CalendarScreen = () => {
    const {signOut} = React.useContext(AuthContext)
    return (
        <CukiContainer>
            <Text>캘린더 화면</Text>
            <Button
                title={"push to sign out"}
                onPress={() => {
                    signOut()
                }}
            />
        </CukiContainer>
    )
}

export default CalendarScreen
