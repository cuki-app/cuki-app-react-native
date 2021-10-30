import React from "react";
import styled from "styled-components/native";
import {LayoutAnimation, View} from "react-native";
import CukiButton from "../../../components/CukiButton";
import CukiList from "../../../components/CukiItemList";
import CukiCard from "../../../components/CukiCard";
import CukiHeader from "../../../components/CukiHeader";

const ScheduleScreenContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: #D2CED6;
`

const ScheduleListContainer = styled.SafeAreaView`
  background-color: white;
`

const ScheduleListWrapper = styled.SafeAreaView`
  margin: 0 36px;
  margin-bottom: 135px;
`

const arr: Array<string> = [];
for (let i = 0; i < 10; i++) {
    arr.push(i.toString());
}

const ScheduleListScreen = ({navigation}) => {
    const [toggleCommandBox, setToggleCommandBox] = React.useState(true)

    // component did mount
    React.useEffect(() => {
        const timer = setTimeout(() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
            setToggleCommandBox(false)
            clearTimeout(timer);
        }, 600)
    }, [])

    return (
        <ScheduleScreenContainer
            style={{
                backgroundColor: toggleCommandBox ? '#D2CED6' : 'white'
            }}
        >
            {toggleCommandBox &&
            <View
                style={{
                    padding: 20
                }}
            >
                <CukiButton
                    onPress={() => {
                        navigation.navigate('schedule-registration')
                    }}
                    type={'PRIMARY'}
                    style={{width: '100%'}}
                >일정 등록하기</CukiButton>
            </View>
            }
            <ScheduleListContainer
                style={{
                    borderTopLeftRadius: toggleCommandBox ? 16 : 0,
                    borderTopRightRadius: toggleCommandBox ? 16 : 0
                }}
            >
                <ScheduleListWrapper>
                    <CukiHeader fontSize={30}>모든 일정</CukiHeader>
                    <CukiList
                        keyExtractor={item => item.toString()}
                        data={arr}
                        renderItem={
                            ({item}) =>
                                <CukiCard onPress={
                                    () => {
                                        navigation.navigate('schedule-info', {idx: 1})
                                    }}
                                />
                        }
                        onScroll={(e) => {
                            // console.log(e.nativeEvent.contentOffset.y)
                            if (e.nativeEvent.contentOffset.y < -50) {
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                setToggleCommandBox(true)
                            }
                            if (e.nativeEvent.contentOffset.y > 0) {
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                setToggleCommandBox(false)
                            }
                        }}
                    />
                </ScheduleListWrapper>
            </ScheduleListContainer>
        </ScheduleScreenContainer>
    )
}

export default ScheduleListScreen;
