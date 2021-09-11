import React from "react";
import CukiContainer, {CukiBox} from "../../components/CukiContainer";
import CukiHeader from "../../components/CukiHeader";
import CukiParagraph from "../../components/CukiParagraph";
import CukiInput from "../../components/CukiInput";
import CukiButton from "../../components/CukiButton";
import {defaultFontColor} from "../../components/ColorCode";
import {AuthContext, SignInParam} from "../../contexts/AuthenticationContext";

const SignInAuthCodeScreen = ({route}) => {
    const [authCode, setAuthCode] = React.useState('')
    const {signIn} = React.useContext(AuthContext)
    return (
        <CukiContainer>
            <CukiBox>
                <CukiHeader>들어가기</CukiHeader>
                <CukiParagraph>해당 이메일로 받은</CukiParagraph>
                <CukiParagraph>인증코드를 입력해주세요.</CukiParagraph>
            </CukiBox>
            <CukiBox>
                <CukiHeader
                    fontSize={18}
                    fontColor={'#4F4F4F'}
                    style={{
                        paddingBottom: 10
                    }}
                >인증코드</CukiHeader>
                <CukiInput
                    placeholder={"인증코드를 입력해주세요."}
                    value={authCode}
                    onChangeText={setAuthCode}
                />
            </CukiBox>
            <CukiBox style={{alignItems: 'center'}}>
                <CukiButton
                    type={authCode !== '' ? 'PRIMARY' : ''}
                    title={'인증하기'}
                    titleColor={'white'}
                    onPress={() => {
                        const param: SignInParam = {
                            email: route.params.email,
                            magicCode: authCode
                        }
                        console.log(param)
                        // signIn(param)
                    }}
                    style={{
                        marginTop: 20,
                    }}
                />
                <CukiParagraph
                    style={{
                        marginTop: 20,
                        fontSize: 16,
                        color: `${defaultFontColor}`
                    }}
                >처음 왔어요! 회원가입</CukiParagraph>
            </CukiBox>
        </CukiContainer>
    )
}

export default SignInAuthCodeScreen
