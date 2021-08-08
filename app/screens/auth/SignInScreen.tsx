import React from "react";
import CukiContainer from "../../components/CukiContainer";
import {Button} from "react-native";
import styled from "styled-components/native";
import {AuthContext} from "../../contexts/AuthenticationContext";

const CukiTextInput = styled.TextInput`
  color: white;
`

const SignInScreen = () => {
    const [email, setEmail] = React.useState('')
    const [magicCode, setMagicCode] = React.useState('')
    const {signIn} = React.useContext(AuthContext)
    return (
        <CukiContainer>
            <CukiTextInput
                placeholder={"email"}
                value={email}
                onChangeText={setEmail}
            />
            <CukiTextInput
                placeholder={"magic code"}
                value={magicCode}
                onChangeText={setMagicCode}
            />
            <Button
                title={"Welcome!"}
                onPress={() => {
                    const param = {email, magicCode}
                    signIn(param)
                    // do something about authentication here.
                }}
            />
        </CukiContainer>
    )
}

export default SignInScreen
