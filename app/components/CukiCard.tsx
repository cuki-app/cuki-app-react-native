import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import CukiHeader from "./CukiHeader";
import CukiParagraph from "./CukiParagraph";
import {Schedule} from "../domain/ScheduleService";

const DefaultCardView = styled.SafeAreaView`
  border-color: #D3D3D3;
  border-width: 1px;
  border-radius: 16px;
  width: 100%;
  margin-bottom: 20px;
`

const DefaultCardWrapper = styled.SafeAreaView`
  margin: 20px;
`

type CukiCardProps = {
    onPress?: () => void,
    content: Schedule
}

const CukiCard = (props?: PropsWithChildren<CukiCardProps>) => {
    return (
        <DefaultCardView>
            <DefaultCardWrapper>
                <CukiHeader
                    onPress={props?.onPress}
                    fontSize={22}
                    fontColor={'black'}
                    style={{paddingTop: 0, paddingBottom: 16}}
                >{props?.content.title}</CukiHeader>
                <CukiParagraph>📍{props?.content.place}</CukiParagraph>
                <CukiParagraph>📅 {props?.content.startDateTime}</CukiParagraph>
            </DefaultCardWrapper>
        </DefaultCardView>
    )
}

export default CukiCard
