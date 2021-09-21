import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ScheduleListScreen from "./ScheduleListScreen";

const ScheduleNavigator = createStackNavigator()

const ScheduleStack = ({navigation}) => {
    return (
        <ScheduleNavigator.Navigator
            initialRouteName={"schedule-list"}
            screenOptions={{
                headerShown: false
            }}
        >
            <ScheduleNavigator.Screen name={"schedule-list"} component={ScheduleListScreen}/>
        </ScheduleNavigator.Navigator>
    )
}

export default ScheduleStack;
