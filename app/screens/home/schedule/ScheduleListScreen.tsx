import React from "react";
import styled from "styled-components/native";
import {LayoutAnimation, View} from "react-native";
import CukiButton from "../../../components/CukiButton";
import CukiList from "../../../components/CukiItemList";
import CukiCard from "../../../components/CukiCard";
import CukiHeader from "../../../components/CukiHeader";
import {Schedule, ScheduleListResponse, ScheduleService} from "../../../domain/ScheduleService";

const ScheduleScreenContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: #D2CED6;
`

const ScheduleListContainer = styled.SafeAreaView`
  background-color: white;
`

const ScheduleListWrapper = styled.SafeAreaView`
`

const ScheduleListScreen = ({navigation}) => {
    const [toggleCommandBox, setToggleCommandBox] = React.useState(true)
    const [schedules, setSchedules] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false);
    const [hasNext, setHasNext] = React.useState(false);
    const [currentPageNumber, setCurrentPageNumber] = React.useState(0);

    const onFetched = (res: ScheduleListResponse, newList: Array<Schedule> = null) => {
        setSchedules(newList || res.content)
        setHasNext(res.hasNext)
        setCurrentPageNumber(res.currentPageNumber)
    }

    // component did mount
    React.useEffect(() => {
        ScheduleService
            .getSchedules()
            .then(res => {
                onFetched(res)
            })
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
                    <CukiHeader
                        fontSize={30}
                        style={{
                            marginLeft: 36
                        }}
                    >모든 일정</CukiHeader>
                    <CukiList
                        keyExtractor={schedule => schedule.scheduleId.toString()}
                        data={schedules}
                        refreshing={refreshing}
                        onEndReached={() => {
                            if (hasNext) {
                                ScheduleService
                                    .getSchedules(currentPageNumber + 1)
                                    .then(res => {
                                        onFetched(res, [...schedules, ...res.content])
                                    })
                            }
                        }}
                        onEndReachedThreshold={1}
                        onRefresh={() => {
                            setRefreshing(true)
                            ScheduleService
                                .getSchedules()
                                .then(res => {
                                    onFetched(res)
                                })
                                .finally(() => {
                                    setRefreshing(false)
                                })
                        }}
                        renderItem={
                            ({item}) =>
                                <CukiCard
                                    content={item}
                                    onPress={
                                        () => {
                                            navigation.navigate('schedule-info', item)
                                        }
                                    }
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
