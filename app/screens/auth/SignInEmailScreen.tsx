import React from "react";
import CukiContainer, {CukiBox} from "../../components/CukiContainer";
import CukiButton from "../../components/CukiButton";
import CukiInput from "../../components/CukiInput";
import CukiHeader from "../../components/CukiHeader";
import CukiParagraph from "../../components/CukiParagraph";
import {defaultFontColor} from "../../components/ColorCode";

const SignInEmailScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('')
    return (
        <CukiContainer>
            <CukiBox>
                <CukiHeader>들어가기</CukiHeader>
                <CukiParagraph>로그인은 계속해서 유지돼요</CukiParagraph>
                <CukiParagraph>단, 30일간 활동이 없다면 로그아웃됩니다.</CukiParagraph>
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
                    keyboardType={"email-address"}
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
                        navigation.navigate('type-code', {email: email})
                        // signIn(param)
                    }}
                    style={{
                        marginTop: 20,
                    }}
                />
                <CukiParagraph
                    onPress={() => {
                        navigation.navigate('sign-up-email')
                    }}
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

export default SignInEmailScreen
