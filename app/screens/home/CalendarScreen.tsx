import React, {PropsWithChildren} from "react";
import CukiCell from "../../components/CukiCell";
import CukiHeader from "../../components/CukiHeader";
import {CukiHiddenInput} from "../../components/CukiInput";
import styled from "styled-components/native";
import {Keyboard, Platform, Text, TouchableWithoutFeedback, View} from "react-native";
import CukiButton from "../../components/CukiButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import CukiParagraph from "../../components/CukiParagraph";
import {mainColor} from "../../components/ColorCode";

const MainContainer = styled.KeyboardAvoidingView`
  flex: 1;
`

const DefaultContainer = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  background-color: white;
  flex-direction: column;
  padding: 20px 0;
`

const OverlayContainer = styled.KeyboardAvoidingView`
  position: absolute;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

const OverlayItem = styled.TouchableOpacity`
  flex: 1;
`

type DefaultProps = {
    style?: any,
    onPress?: () => void
}

const BottomSheetItem = (props?: PropsWithChildren<DefaultProps>) => {
    return (
        <OverlayItem style={{...props?.style}} onPress={props?.onPress}>
            {props?.children}
        </OverlayItem>
    )
}

const BottomSheetContainer = (props?: PropsWithChildren<DefaultProps>) => {
    return (
        <OverlayContainer>
            {props?.children}
        </OverlayContainer>
    )
}

const calendarHeaderDefaultStyle = {
    paddingTop: 0,
    paddingBottom: 18,
    paddingLeft: 0,
    paddingRight: 0,
}

type Mode = 'date' | 'time' | undefined

const CalendarScreen = () => {
    React.useEffect(() => {
        console.log('================')
        console.log(date)
        console.log(date.toString())
        console.log(date.toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'}))
        console.log('================')
    })

    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState<Mode>('date');
    const [show, setShow] = React.useState(false);

    const onChange = (event: any, selectedDate: any = undefined) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <MainContainer>
                <DefaultContainer
                    style={{backgroundColor: '#E4E2E5', paddingBottom: 600}}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <CukiCell>
                        <CukiHeader
                            fontSize={24}
                            style={calendarHeaderDefaultStyle}
                        >어떤 일정인가요?</CukiHeader>
                        <CukiHiddenInput
                            placeholder={"일정 제목을 입력해주세요"}
                        />
                    </CukiCell>
                    <CukiCell>
                        <CukiHeader
                            fontSize={20}
                            fontColor={'black'}
                            style={calendarHeaderDefaultStyle}
                        >날짜와 인원을 정해주세요!</CukiHeader>
                        <Text
                            onPress={() => showDatepicker()}
                        >시작 시간을 입력해주세요.</Text>
                        <Text
                            onPress={() => showDatepicker()}
                        >종료 시간을 입력해주세요.</Text>
                        <CukiParagraph>인원</CukiParagraph>
                    </CukiCell>
                    <CukiCell>
                        <CukiHeader
                            fontSize={20}
                            fontColor={'black'}
                            style={calendarHeaderDefaultStyle}
                        >어디서 진행하나요?</CukiHeader>
                        <CukiHiddenInput
                            placeholder={"장소를 적어주세요!"}
                        />
                    </CukiCell>
                    <CukiCell>
                        <CukiHeader
                            fontSize={20}
                            fontColor={'black'}
                            style={calendarHeaderDefaultStyle}
                        >세부적인 설명이 필요해요!</CukiHeader>
                        <CukiHiddenInput
                            placeholder={"최대 300자/선택"}
                        />
                    </CukiCell>
                    <CukiCell type={'transparent'}>
                        <CukiButton
                            titleColor={'white'}
                        >등록하기</CukiButton>
                    </CukiCell>
                </DefaultContainer>
                {show &&
                <BottomSheetContainer>
                    <BottomSheetItem onPress={() => {
                        setShow(false)
                    }}/>
                    <BottomSheetItem style={{
                        backgroundColor: 'white',
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px'
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingTop: 20,
                            paddingLeft: 20,
                            paddingRight: 20,
                        }}>
                            <Text
                                onPress={() => {
                                    setShow(false)
                                }}
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                }}
                            >취소</Text>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                                {mode === 'time' ? '시간설정' : '날짜설정'}
                            </Text>
                            <Text
                                onPress={() => {
                                    if (mode === 'date') {
                                        showMode('time')
                                    } else {
                                        setShow(false)
                                    }
                                }}
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: `${mainColor}`
                                }}
                            >{mode === 'time' ? '완료' : '다음'}</Text>
                        </View>
                        <View style={{
                            padding: 50
                        }}>
                            <RNDateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="spinner"
                                onChange={onChange}
                            />
                        </View>
                    </BottomSheetItem>
                </BottomSheetContainer>}
            </MainContainer>
        </TouchableWithoutFeedback>
    )
}

export default CalendarScreen
