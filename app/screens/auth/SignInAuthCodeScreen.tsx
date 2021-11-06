import React from "react";
import CukiContainer, {CukiBox} from "../../components/CukiContainer";
import CukiHeader from "../../components/CukiHeader";
import CukiParagraph from "../../components/CukiParagraph";
import CukiInput from "../../components/CukiInput";
import CukiButton from "../../components/CukiButton";
import {defaultFontColor} from "../../components/ColorCode";
import {AuthContext} from "../../contexts/AuthenticationContext";
import {AuthService} from "../../domain/AuthService";

const SignInAuthCodeScreen = ({route, navigation}) => {
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
                    onPress={async () => {
                        const result = await AuthService.login(route.params.email, authCode)
                        console.log(result)
                        signIn({
                            email: route.params.email,
                            magicCode: 'magic'
                        })
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

export default SignInAuthCodeScreen
