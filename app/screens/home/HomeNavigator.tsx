import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CalendarScreen from "./CalendarScreen";
import ScheduleScreen from "./ScheduleScreen";
import PersonalSettingScreen from "./PersonalSettingScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator()

const HomeTab = ({navigation}) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#422AD3",
            tabBarInactiveTintColor: "#D2CED6"
        }}>
            <Tab.Screen
                name={"캘린더"}
                component={CalendarScreen}
                options={{
                    tabBarIcon: (props: { focused: boolean, color: string, size: number }) => {
                        return <MaterialCommunityIcons name={"calendar"} color={props.color} size={props.size}/>
                    }
                }}
            />
            <Tab.Screen
                name={"일정"}
                component={ScheduleScreen}
                options={{
                    tabBarIcon: (props: { focused: boolean, color: string, size: number }) => {
                        return <MaterialCommunityIcons name={"tooltip-plus"} color={props.color} size={props.size}/>
                    }
                }}
            />
            <Tab.Screen
                name={"MY쿠키"}
                component={PersonalSettingScreen}
                options={{
                    tabBarIcon: (props: { focused: boolean, color: string, size: number }) => {
                        return <MaterialCommunityIcons name={"face"} color={props.color} size={props.size}/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTab;
