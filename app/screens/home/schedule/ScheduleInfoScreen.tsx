import React, {useState} from "react";
import styled from "styled-components/native";
import {KeyboardAvoidingView, LayoutAnimation} from "react-native";
import CukiCell from "../../../components/CukiCell";
import CukiHeader from "../../../components/CukiHeader";
import CukiParagraph from "../../../components/CukiParagraph";
import CukiButton from "../../../components/CukiButton";
import CukiList from "../../../components/CukiItemList";
import {CukiHiddenInput} from "../../../components/CukiInput";
import {Schedule, ScheduleService} from "../../../domain/ScheduleService";

const ScheduleInfoContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  flex-direction: column;
  background-color: #E5E5E5;
`

type ScheduleComment = {
    idx: number,
    name: string,
    content: string,
}

const arr: Array<ScheduleComment> = [];
for (let i = 0; i < 10; i++) {
    arr.push({
        idx: i,
        name: '이름',
        content: '내용'
    });
}

const ScheduleCommentList = () => {

}

const ScheduleCommentItem = () => {
    return (
        <CukiCell>
            <CukiParagraph>ㅇㅅㅇ</CukiParagraph>
        </CukiCell>
    )
}

const ScheduleInfoScreen = ({route}) => {
    const [schedule, setSchedule] = useState({} as Schedule);

    React.useEffect(() => {
        ScheduleService
            .getSchedule(route.params.scheduleId)
            .then(res => {
                console.log(res)
                setSchedule(res)
            })
    }, [])

    const [signedUp, setSignedUp] = useState(false)
    const [visibleSignUp, setVisibleSignUp] = useState(false)
    const [singUpContent, setSignUpContent] = useState('')

    return (
        <ScheduleInfoContainer>
            <KeyboardAvoidingView>
                <CukiCell>
                    <CukiHeader fontSize={24} fontColor={'black'}>{route.params.title}</CukiHeader>
                    <CukiParagraph style={{marginBottom: 5}}>📍{route.params.place}</CukiParagraph>
                    <CukiParagraph style={{marginBottom: 5}}>📅 {route.params.startDateTime}</CukiParagraph>
                    <CukiParagraph style={{marginBottom: 5}}>🎫 {`${schedule.currentNumberOfPeople} / ${schedule.fixedNumberOfPeople}`}</CukiParagraph>
                    <CukiParagraph style={{marginTop: 15, marginBottom: 15}}>
                        {`${schedule.details}`}
                    </CukiParagraph>
                    <CukiParagraph style={{marginBottom: 5}}>신청자 🙋 {schedule.numberOfPeopleWaiting}명</CukiParagraph>
                </CukiCell>
                {visibleSignUp &&
                <CukiCell>
                    <CukiHeader fontSize={20} fontColor={'black'}>참여 신청 ✍</CukiHeader>
                    <CukiHiddenInput
                        placeholder={'참가 사유를 적어주세요!'}
                        onChangeText={setSignUpContent}
                    />
                </CukiCell>
                }
                <CukiCell type={'transparent'}>
                    {(!visibleSignUp && !signedUp) &&
                    <CukiButton
                        onPress={() => {
                            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
                            setVisibleSignUp(true)
                        }}
                        type={'PRIMARY'}>참여신청</CukiButton>
                    }
                    {visibleSignUp &&
                    <CukiButton
                        titleColor={'white'}
                        onPress={() => {
                            if (singUpContent !== '') {
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
                                setVisibleSignUp(false)
                                setSignedUp(true)
                            } else {
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
                                setVisibleSignUp(false)
                            }
                        }}
                        type={singUpContent !== '' ? 'PRIMARY' : ''}>참여할래요
                    </CukiButton>
                    }
                </CukiCell>
                <CukiCell>
                    <CukiList
                        keyExtractor={item => item.idx.toString()}
                        data={arr}
                        renderItem={
                            ({item}) =>
                                <ScheduleCommentItem/>
                        }
                    />
                </CukiCell>
            </KeyboardAvoidingView>
        </ScheduleInfoContainer>
    )
}

export default ScheduleInfoScreen
