import React from "react";
import CukiContainer, {CukiBox} from "../../components/CukiContainer";
import {AuthContext} from "../../contexts/AuthenticationContext";
import CukiButton from "../../components/CukiButton";
import CukiInput from "../../components/CukiInput";
import CukiHeader from "../../components/CukiHeader";
import CukiParagraph from "../../components/CukiParagraph";

const SignUpEmailScreen = () => {
    const [email, setEmail] = React.useState('')
    const {signIn} = React.useContext(AuthContext)
    return (
        <CukiContainer>
            <CukiBox>
                <CukiHeader>회원가입</CukiHeader>
                <CukiParagraph>쿠키는 단 한 번의 회원가입으로</CukiParagraph>
                <CukiParagraph>로그인 없이 편하게 이용할 수 있어요!</CukiParagraph>
            </CukiBox>
            <CukiBox>
                <CukiHeader
                    fontSize={18}
                    fontColor={'#4F4F4F'}
                    style={{
                        paddingBottom: 10
                    }}
                >이메일</CukiHeader>
                <CukiInput
                    keyboardType={'email-address'}
                    placeholder={"이메일을 입력해주세요."}
                    value={email}
                    onChangeText={setEmail}
                />
            </CukiBox>
            <CukiBox style={{alignItems: 'center'}}>
                <CukiButton
                    type={email !== '' ? 'PRIMARY' : ''}
                    title={'다음'}
                    titleColor={'white'}
                    onPress={() => {
                        console.log(email)
                        // signIn(param)
                    }}
                    style={{
                        marginTop: 20,
                    }}
                />
            </CukiBox>
            <CukiParagraph> </CukiParagraph>
        </CukiContainer>
    )
}

export default SignUpEmailScreen
