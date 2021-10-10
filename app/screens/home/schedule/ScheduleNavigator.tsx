import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ScheduleListScreen from "./ScheduleListScreen";
import ScheduleInfoScreen from "./ScheduleInfoScreen";
import ScheduleRegistrationScreen from "./ScheduleRegistrationScreen";

const ScheduleNavigator = createStackNavigator()

// 일정 탭 스택
const ScheduleStack = ({navigation}) => {
    return (
        <ScheduleNavigator.Navigator
            initialRouteName={"schedule-list"}
            screenOptions={{
                headerShown: false
            }}
        >
            <ScheduleNavigator.Screen name={"schedule-list"} component={ScheduleListScreen}/>
            <ScheduleNavigator.Screen name={"schedule-registration"} component={ScheduleRegistrationScreen}/>
            <ScheduleNavigator.Screen name={"schedule-info"} component={ScheduleInfoScreen}/>
        </ScheduleNavigator.Navigator>
    )
}

export default ScheduleStack;
