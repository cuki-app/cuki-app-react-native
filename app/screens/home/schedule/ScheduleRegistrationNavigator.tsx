import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ScheduleTitleScreen from "./ScheduleTitleScreen";

const ScheduleRegistrationNavigator = createStackNavigator()

const ScheduleRegistrationStack = ({navigation}) => {
    return (
        <ScheduleRegistrationNavigator.Navigator
            initialRouteName={"schedule-list"}
            screenOptions={{
                headerShown: false
            }}
        >
            <ScheduleRegistrationNavigator.Screen name={"schedule-title"} component={ScheduleTitleScreen}/>
        </ScheduleRegistrationNavigator.Navigator>
    )
}

export default ScheduleRegistrationStack
