import React from 'react';
import {AuthContext, SignInParam} from "./contexts/AuthenticationContext";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoadingScreen from "./screens/loading/Loading";
import HomeTab from "./screens/home/HomeNavigator";
import AuthStack from "./screens/auth/AuthNavigator";

const Stack = createStackNavigator()

const App = ({navigation}) => {
    const [state, dispatch] = React.useReducer(
        (prevState: any, action: any) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignOut: false,
                        userToken: action.token
                    };
                case 'SIGN_UP':
                    return {
                        ...prevState,
                        isSignOut: true,
                        isLoading: true
                    }
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignOut: true,
                        isLoading: false,
                        userToken: null
                    }
            }
        },
        {
            isLoading: true,
            isSignOut: false,
            userToken: null
        }
    );

    const authContext = React.useMemo(() => ({
            restore: async (token: string | null) => {
                dispatch({
                    type: 'RESTORE_TOKEN',
                    token: token
                })
            },
            signIn: async (param: SignInParam) => {
                dispatch({
                    type: 'SIGN_IN',
                    token: param.magicCode
                })
            },
            signOut: () => {
                dispatch({
                    type: 'SIGN_OUT'
                })
            },
            signUp: () => {
                dispatch({
                    type: 'SIGN_UP',
                    token: 'dummy-auth-token'
                })
            }
        }),
        []
    )

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    {state.isLoading ? (
                        <Stack.Screen name={"Loading"} component={LoadingScreen}/>
                    ) : state.userToken == null ? (
                        <Stack.Screen
                            name={"SignIn"}
                            component={AuthStack}
                            options={{
                                title: 'auth',
                                animationTypeForReplace: state.isSignOut ? 'pop' : 'push'
                            }}
                        />
                    ) : (
                        <Stack.Screen
                            name={"Home"}
                            component={HomeTab}
                        />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default App;
