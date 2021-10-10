import React from "react";
import CukiContainer, {CukiBox} from "../../components/CukiContainer";
import CukiHeader from "../../components/CukiHeader";
import CukiParagraph from "../../components/CukiParagraph";
import CukiInput from "../../components/CukiInput";
import CukiButton from "../../components/CukiButton";
import {AuthContext, SignUpParam} from "../../contexts/AuthenticationContext";
import {SignUpService} from "../../domain/UserService";

const SignUpAuthCodeScreen = ({route}) => {
    const [authCode, setAuthCode] = React.useState('')
    const {signUp} = React.useContext(AuthContext)
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
                        SignUpService.requestSignUp(param)
                            .then(res => {
                                signUp()
                            })
                            .catch(err => alert('문제가 발생했어요.'))
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
