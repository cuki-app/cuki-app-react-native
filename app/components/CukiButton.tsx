import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {defaultBorder, defaultFontColor, primaryColor} from "./ColorCode";

const DefaultPressable = styled.Pressable`
  display: flex;
  border: 1px;
  border-radius: 16px;
  border-color: #D2CED6;
  background-color: #D2CED6;
  color: white;
  font-size: 24px;
  width: 271px;
  height: 55px;
  justify-content: center;
  align-items: center;
`;

const PrimaryPressable = styled.Pressable`
  display: flex;
  border-radius: 16px;
  border: 1px;
  background-color: ${primaryColor};
  border-color: ${primaryColor};
  width: 271px;
  height: 55px;
  justify-content: center;
  align-items: center;
`

const WeakPressable = styled.Pressable`
  display: flex;
  border-radius: 16px;
  border: 1px;
  border-color: ${defaultBorder};
  width: 220px;
  height: 44px;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 5px 5px ${primaryColor};
`

const DefaultButtonTitle = styled.Text`
  font-size: 22px;
  font-weight: 300;
  color: ${defaultFontColor};
`;

type DefaultButtonProps = {
    title?: string,
    titleColor?: string,
    type?: string
    style?: any,
    onPress?: () => void
    onLongPress?: () => void
}

const defaultButton = (props?: PropsWithChildren<DefaultButtonProps>) => (
    <DefaultPressable
        style={{...props?.style}}
        onPress={props?.onPress}
        onLongPress={props?.onLongPress}
    >
        <DefaultButtonTitle style={{
            color: props?.titleColor || `${defaultFontColor}`
        }}>{props?.children || props?.title || 'Button'}</DefaultButtonTitle>
    </DefaultPressable>
)

const primaryButton = (props?: PropsWithChildren<DefaultButtonProps>) => (
    <PrimaryPressable
        style={{...props?.style}}
        onPress={props?.onPress}
        onLongPress={props?.onLongPress}
    >
        <DefaultButtonTitle
            style={{color: '#fff'}}>{props?.children || props?.title || 'Button'}</DefaultButtonTitle>
    </PrimaryPressable>
)

const CukiButton = (props?: PropsWithChildren<DefaultButtonProps>) => {
    if (props?.type === 'PRIMARY') {
        return primaryButton(props)
    }
    return defaultButton(props)
}

export default CukiButton;
