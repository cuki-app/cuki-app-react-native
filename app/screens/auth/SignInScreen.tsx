import React from "react";
import CukiContainer, {CukiBox} from "../../components/CukiContainer";
import styled from "styled-components/native";
import {AuthContext} from "../../contexts/AuthenticationContext";
import CukiButton from "../../components/CukiButton";
import CukiInput from "../../components/CukiInput";
import CukiHeader from "../../components/CukiHeader";

const CukiTextInput = styled.TextInput`
  color: white;
`

const SignInScreen = () => {
    const [email, setEmail] = React.useState('')
    const [magicCode, setMagicCode] = React.useState('')
    const {signIn} = React.useContext(AuthContext)
    return (
        <CukiContainer>
            <CukiBox>
                <CukiHeader>회원가입</CukiHeader>
                <CukiHeader style={{fontSize: 18}}>쿠키에 오신 것을 환영해요!</CukiHeader>
            </CukiBox>
            <CukiBox>
                <CukiHeader>이메일</CukiHeader>
                <CukiInput
                    placeholder={"인증 코드를 입력해주세요"}
                    value={magicCode}
                    onChangeText={setMagicCode}
                />
                <CukiButton
                    title={'인증하기'}
                    onPress={() => {
                        const param = {email, magicCode}
                        signIn(param)
                    }}
                />
            </CukiBox>
        </CukiContainer>
    )
}

export default SignInScreen
