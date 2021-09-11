import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import SignInEmailScreen from "./SignInEmailScreen";
import SignInAuthCodeScreen from "./SignInAuthCodeScreen";
import SignUpEmailScreen from "./SignUpEmailScreen";
import SignUpAuthCodeScreen from "./SignUpAuthCodeScreen";

const AuthNavigator = createStackNavigator()

const AuthStack = ({navigation}) => {
    return (
        <AuthNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthNavigator.Screen name={"type-email"} component={SignInEmailScreen}/>
            <AuthNavigator.Screen name={"type-code"} component={SignInAuthCodeScreen}/>
            <AuthNavigator.Screen name={"sign-up-email"} component={SignUpEmailScreen}/>
            <AuthNavigator.Screen name={"sign-up-code"} component={SignUpAuthCodeScreen}/>
        </AuthNavigator.Navigator>
    )
}

export default AuthStack;
