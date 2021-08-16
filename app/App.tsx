import React from 'react';
import {AuthContext, SignInParam, SignUpParam} from "./contexts/AuthenticationContext";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoadingScreen from "./screens/loading/Loading";
import SignInScreen from "./screens/auth/SignInScreen";
import HomeScreen from "./screens/home/HomeScreen";
import api from "./api/api";
import {SIGN_UP_ENDPOINT} from "./api/auth/SignUp";

const Stack = createStackNavigator()

type InitialState = {
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

const App = ({navigation}) => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
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
                    await api.post(SIGN_UP_ENDPOINT)
                        .then(result => {
                            console.log(result)
                        })
                        .catch(reason => {
                            console.log(reason)
                        })
                    const userToken = 'fake-user-token'
                    dispatch({
                        type: 'RESTORE_TOKEN',
                        token: userToken
                    })
                } catch (e) {
                    console.error(e)
                }
            }
            bootstrapAsync()
            // setTimeout(() => bootstrapAsync(), 3000)
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
                <Stack.Navigator>
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
