import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {Keyboard, TouchableWithoutFeedback} from "react-native";

const DefaultContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: white;
  flex-direction: column;
  justify-content: center;
`

const DefaultBox = styled.View`
  padding: 5% 10%;
  justify-content: center;
`

type DefaultBoxProps = {
    style?: any
}

export const CukiBox = (props?: PropsWithChildren<DefaultBoxProps>) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <DefaultBox style={{...props?.style}}>
                {props?.children}
            </DefaultBox>
        </TouchableWithoutFeedback>
    )
}

const CukiContainer = (props?: PropsWithChildren<any>) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <DefaultContainer style={{...props?.style}}>
                {props?.children}
            </DefaultContainer>
        </TouchableWithoutFeedback>
    )
}

export default CukiContainer
