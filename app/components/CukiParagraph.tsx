import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";

const DefaultParagraph = styled.Text`
    font-size: 18px;
`

type DefaultParagraphProps = {
    style?: any
}

const CukiParagraph = (props?: PropsWithChildren<DefaultParagraphProps>) => (
    <DefaultParagraph style={props?.style}>
        {props?.children || 'Title'}
    </DefaultParagraph>
)

export default CukiParagraph;
