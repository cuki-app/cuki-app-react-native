import React, {PropsWithChildren} from "react";
import {Keyboard, Platform, Text, TouchableWithoutFeedback, View} from "react-native";
import styled from "styled-components/native";
import {mainColor} from "../../../components/ColorCode";
import {CukiHiddenInput} from "../../../components/CukiInput";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import CukiButton from "../../../components/CukiButton";
import {ScheduleService} from "../../../domain/ScheduleService";

const inputStyle = {
    fontSize: 32,
    marginBottom: 10,
    marginLeft: 32
}

type DefaultProps = {
    style?: any,
    onPress?: () => void
}

const ScheduleContainer = styled.KeyboardAvoidingView`
  flex: 1;
`

const RegistrationContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: white;
  flex-direction: column;
  justify-content: center;
`

const OverlayContainer = styled.SafeAreaView`
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

const BottomSheetContainer = (props?: PropsWithChildren<DefaultProps>) => {
    return (
        <OverlayContainer>
            {props?.children}
        </OverlayContainer>
    )
}

const BottomSheetItem = (props?: PropsWithChildren<DefaultProps>) => {
    return (
        <OverlayItem style={{...props?.style}} onPress={props?.onPress}>
            {props?.children}
        </OverlayItem>
    )
}

type Mode = 'date' | 'time' | undefined

const ScheduleRegistrationScreen = ({navigation}) => {

    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState<Mode>('date');
    const [bottomSheetVisible, setBottomSheetVisible] = React.useState(false)

    const onChange = (event: any, selectedDate: any = undefined) => {
        const currentDate = selectedDate || date;
        setBottomSheetVisible(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(`currentDate: ${currentDate}`)
    };

    const showMode = (currentMode: any) => {
        setBottomSheetVisible(true);
        setMode(currentMode);
    };

    const getStyle = () => {
        if (titleComplete && startDateComplete && endDateComplete && countOfMembersComplete && locationComplete) {
            return {
                ...inputStyle,
            }
        }
        return {
            ...inputStyle,
        }
    }

    const [title, setTitle] = React.useState<string>('')
    const [titleComplete, setTitleComplete] = React.useState<boolean>(false)
    const [startDate, setStartDate] = React.useState<Date>(date)
    const [startDateString, setStartDateString] = React.useState<string>('')
    const [startDateComplete, setStartDateComplete] = React.useState<boolean>(false)
    const [endDate, setEndDate] = React.useState<Date>(date)
    const [endDateString, setEndDateString] = React.useState<string>('')
    const [endDateComplete, setEndDateComplete] = React.useState<boolean>(false)
    const [countOfMembers, setCountOfMembers] = React.useState(0)
    const [countOfMembersComplete, setCountOfMembersComplete] = React.useState(false)
    const [location, setLocation] = React.useState('')
    const [locationComplete, setLocationComplete] = React.useState(false)
    const [detail, setDetail] = React.useState('');
    const [detailComplete, setDetailComplete] = React.useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScheduleContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <RegistrationContainer onTouchEnd={() => {
                    console.log(`title: ${title}`)
                    console.log(`startDate: ${startDate}`)
                    console.log(`endDate: ${endDate}`)
                    console.log(`countOfMembers: ${countOfMembers}`)
                    console.log(`location: ${location}`)
                }}>
                    <CukiHiddenInput
                        multiline={false}
                        placeholder={"어떤 일정인가요?"}
                        style={getStyle()}
                        onChangeText={setTitle}
                        onEndEditing={() => {
                            setTitleComplete(true)
                        }}
                    />
                    {titleComplete &&
                    <CukiHiddenInput
                        value={startDateString}
                        autoFocus={true}
                        multiline={false}
                        placeholder={"시작 시간을 정해주세요."}
                        style={inputStyle}
                        onFocus={() => {
                            Keyboard.dismiss()
                            setBottomSheetVisible(true)
                        }}
                    />}
                    {startDateComplete &&
                    <CukiHiddenInput
                        value={endDateString}
                        autoFocus={true}
                        multiline={false}
                        placeholder={"끝나는 시간을 정해주세요."}
                        style={inputStyle}
                        onFocus={() => {
                            Keyboard.dismiss()
                            setBottomSheetVisible(true)
                        }}
                    />}
                    {endDateComplete &&
                    <CukiHiddenInput
                        autoFocus={true}
                        multiline={false}
                        placeholder={"인원을 정해주세요."}
                        style={inputStyle}
                        keyboardType={Platform.OS === "ios" ? 'number-pad' : 'numeric'}
                        returnKeyType={'done'}
                        onChangeText={setCountOfMembers}
                        onEndEditing={() => setCountOfMembersComplete(true)}
                    />}
                    {countOfMembersComplete &&
                    <CukiHiddenInput
                        autoFocus={true}
                        multiline={false}
                        placeholder={"장소를 정해주세요."}
                        style={inputStyle}
                        onChangeText={setLocation}
                        onEndEditing={() => setLocationComplete(true)}
                    />}
                    {locationComplete &&
                    <CukiHiddenInput
                        autoFocus={true}
                        multiline={false}
                        placeholder={"자세히 입력해주세요."}
                        style={inputStyle}
                        onChangeText={setDetail}
                        onEndEditing={() => setDetailComplete(true)}
                    />}
                    {titleComplete && startDateComplete && endDateComplete && countOfMembersComplete && locationComplete && detailComplete &&
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <CukiButton
                            type={'PRIMARY'}
                            onPress={() => {
                                ScheduleService
                                    .registerSchedule(
                                        title,
                                        detail,
                                        location,
                                        countOfMembers,
                                        startDate,
                                        endDate
                                    )
                                    .then(res => {
                                        console.log(res)
                                    })
                                    .catch(err => {
                                        console.error(err)
                                        alert('문제가 발생했어요!')
                                    })
                                    .finally(() => {
                                        navigation.goBack()
                                    })
                            }}
                        >등록하기</CukiButton>
                    </View>
                    }
                </RegistrationContainer>
                {bottomSheetVisible &&
                <BottomSheetContainer>
                    <BottomSheetItem onPress={() => setBottomSheetVisible(false)}/>
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
                                    setBottomSheetVisible(false)
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
                                        showMode('date')
                                        setBottomSheetVisible(false)
                                        if (!startDateComplete) {
                                            setStartDate(date)
                                            setStartDateComplete(true)
                                            setStartDateString(`${date.toLocaleString()}`)
                                            return
                                        }

                                        if (!endDateComplete) {
                                            setEndDate(date)
                                            setEndDateComplete(true)
                                            setEndDateString(`${date.toLocaleString()}`)
                                            return
                                        }
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
            </ScheduleContainer>
        </TouchableWithoutFeedback>
    )
}

export default ScheduleRegistrationScreen
