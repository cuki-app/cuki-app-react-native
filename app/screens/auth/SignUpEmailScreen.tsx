import React from "react";
import CukiContainer, {CukiBox} from "../../components/CukiContainer";
import CukiButton from "../../components/CukiButton";
import CukiInput from "../../components/CukiInput";
import CukiHeader from "../../components/CukiHeader";
import CukiParagraph from "../../components/CukiParagraph";
import {SignUpService} from "../../domain/SignUpService";

const SignUpEmailScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('')
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
                    onPress={async () => {
                        console.log('이메일 중복 검사 시작')
                        const result: boolean | void =
                            await SignUpService
                                .checkEmailDuplication(email)
                                .then(result => result)
                                .catch(error => {
                                    console.error(error)
                                    alert('문제가 발생했어요.')
                                })

                        if (result) {
                            SignUpService
                                .requestVerificationCode(email)
                                .then(result => {
                                    if (result) {
                                        navigation.navigate('sign-up-code', {email: email})
                                    }
                                })
                                .catch(error => {
                                    console.error(error)
                                    alert('문제가 발생했어요.')
                                })
                        }
                    }}
                    style={{
                        marginTop: 20,
                    }}
                />
            </CukiBox>
        </CukiContainer>
    )
}

export default SignUpEmailScreen
