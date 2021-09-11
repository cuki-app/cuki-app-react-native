import React from "react";
import CukiContainer, {CukiBox} from "../../components/CukiContainer";
import CukiHeader from "../../components/CukiHeader";
import CukiParagraph from "../../components/CukiParagraph";
import CukiInput from "../../components/CukiInput";
import CukiButton from "../../components/CukiButton";
import {SignUpParam} from "../../contexts/AuthenticationContext";

const SignUpAuthCodeScreen = ({route}) => {
    const [authCode, setAuthCode] = React.useState('')
    return (
        <CukiContainer>
            <CukiBox>
                <CukiHeader>회원가입</CukiHeader>
                <CukiParagraph>이메일로 인증코드가 전송되었어요.</CukiParagraph>
                <CukiParagraph>확인 후 입력하면 끝이에요. 🎉</CukiParagraph>
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
                    title={'다음'}
                    titleColor={'white'}
                    onPress={() => {
                        const param: SignUpParam = {
                            email: route.params.email,
                            magicCode: authCode
                        }
                        console.log(param)
                    }}
                    style={{
                        marginTop: 20,
                    }}
                />
            </CukiBox>
        </CukiContainer>
    )
}

export default SignUpAuthCodeScreen
