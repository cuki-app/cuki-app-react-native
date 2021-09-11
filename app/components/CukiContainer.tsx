import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {Keyboard, TouchableWithoutFeedback} from "react-native";

const CukiContainer = styled.SafeAreaView`
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


export default CukiContainer
