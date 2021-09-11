import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";

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
        <DefaultBox style={{...props?.style}}>
            {props?.children}
        </DefaultBox>
    )
}


export default CukiContainer
