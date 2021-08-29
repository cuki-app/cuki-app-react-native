import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {defaultFontColor} from "./ColorCode";

const HeaderContainer = styled.View`
`

const DefaultHeader = styled.Text`
  color: ${defaultFontColor};
  font-size: 24px;
  font-weight: 500;
`

type DefaultHeaderProps = {
    style?: any
}

const CukiHeader = (props?: PropsWithChildren<DefaultHeaderProps>) => (
    <HeaderContainer>
        <DefaultHeader style={props?.style}>
            {props?.children || 'Title'}
        </DefaultHeader>
    </HeaderContainer>
)

export default CukiHeader
