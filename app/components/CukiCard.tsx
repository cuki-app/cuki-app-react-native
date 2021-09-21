import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import CukiHeader from "./CukiHeader";
import CukiParagraph from "./CukiParagraph";

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

type CukiCardProps = {}

const CukiCard = (props?: PropsWithChildren<CukiCardProps>) => {
    return (
        <DefaultCardView>
            <DefaultCardWrapper>
                <CukiHeader
                    fontSize={22}
                    fontColor={'black'}
                    style={{paddingTop: 0, paddingBottom: 16}}
                >연남동 카페투어</CukiHeader>
                <CukiParagraph>📍연남동 에플린크</CukiParagraph>
                <CukiParagraph>📅 21.08.02</CukiParagraph>
            </DefaultCardWrapper>
        </DefaultCardView>
    )
}

export default CukiCard
