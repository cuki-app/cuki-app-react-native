import React from 'react';
import {AuthContext, SignInParam, SignUpParam} from "./contexts/AuthenticationContext";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoadingScreen from "./screens/loading/Loading";
import SignInScreen from "./screens/auth/SignInScreen";
import HomeScreen from "./screens/home/HomeScreen";

const Stack = createStackNavigator()

type AuthState = {
    /**
     * auth info is not loaded yet
     */
    isLoading: boolean,

    /**
     * token does not exist
     */
    isSignOut: boolean,

    /**
     * token
     */
    userToken?: string
}

type AuthAction = {
    type: string,
    token: string
}

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

    React.useEffect(() => {
            const bootstrapAsync = async () => {
                try {
                    const userToken = 'fake-user-token'
                    console.warn('TODO: token fetcher not implemented yet.')
                    dispatch({
                        type: 'RESTORE_TOKEN',
                        token: userToken
                    })
                } catch (e) {
                    console.error(e)
                }
            }
            bootstrapAsync()
        }, []
    )

    const authContext = React.useMemo(() => ({
            signIn: async (param: SignInParam) => {
                dispatch({
                    type: 'SIGN_IN',
                    token: 'dummy-auth-token'
                })
            },
            signOut: () => {
                dispatch({
                    type: 'SIGN_OUT'
                })
            },
            signUp: async (param: SignUpParam) => {
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
                            component={SignInScreen}
                            options={{
                                title: 'Sign in',
                                animationTypeForReplace: state.isSignOut ? 'pop' : 'push'
                            }}
                        />
                    ) : (
                        <Stack.Screen
                            name={"Home"}
                            component={HomeScreen}
                        />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default App;
