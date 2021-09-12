import React from "react";
import CukiContainer from "../../components/CukiContainer";
import CukiCell from "../../components/CukiCell";
import CukiHeader from "../../components/CukiHeader";
import {CukiHiddenInput} from "../../components/CukiInput";

const calendarHeaderDefaultStyle = {
    paddingTop: 0,
    paddingBottom: 18,
    paddingLeft: 0,
    paddingRight: 0,
}

// 여긴 tab view
const CalendarScreen = () => {
    return (
        <CukiContainer style={{backgroundColor: '#E4E2E5'}}>
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
                >시간과 장소를 정해주세요</CukiHeader>
            </CukiCell>
            <CukiCell>
                <CukiHeader
                    fontSize={20}
                    fontColor={'black'}
                    style={calendarHeaderDefaultStyle}
                >메모를 적어주세요</CukiHeader>
                <CukiHiddenInput
                    placeholder={"메모를 입력해주세요 (최대 300자/선택)"}
                />
            </CukiCell>
        </CukiContainer>
    )
}

export default CalendarScreen
