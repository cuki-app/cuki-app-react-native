import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";

const CukiContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: white;
  flex-direction: column;
`

const DefaultBox = styled.View`
  flex: 1;
  width: 100%;
  padding: 5% 10%;
  align-items: center;
  justify-content: center;
`

type DefaultBoxProps = {
    style?: any
}

export const CukiBox = (props?: PropsWithChildren<DefaultBoxProps>) => {
    console.log(props)
    return (
        <DefaultBox style={props?.style}>
            {props?.children}
        </DefaultBox>
    )
}


export default CukiContainer
