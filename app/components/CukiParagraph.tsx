import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";

const DefaultParagraph = styled.Text`
  font-size: 18px;
`

type DefaultParagraphProps = {
    style?: any,
    onPress?: () => void
}

const CukiParagraph = (props?: PropsWithChildren<DefaultParagraphProps>) => (
    <TouchableOpacity onPress={props?.onPress}>
        <DefaultParagraph style={props?.style}>
            {props?.children || 'Title'}
        </DefaultParagraph>
    </TouchableOpacity>
)

export default CukiParagraph;
