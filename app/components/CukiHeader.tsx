import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {mainColor} from "./ColorCode";

const DefaultHeader = styled.Text`
  color: ${mainColor};
  font-size: 36px;
  font-weight: 700;
  padding: 20px 0;
`

type DefaultHeaderProps = {
    style?: any,
    fontSize?: number,
    fontColor?: string,
    onPress?: () => void,
}

const CukiHeader = (props?: PropsWithChildren<DefaultHeaderProps>) => (
    <DefaultHeader
        onPress={props?.onPress}
        style={{
            ...props?.style,
            fontSize: props?.fontSize || 36,
            color: props?.fontColor || `${mainColor}`,
        }}>
        {props?.children || 'Title'}
    </DefaultHeader>
)

export default CukiHeader
