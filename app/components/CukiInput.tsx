import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {defaultInputBG, defaultInputFC} from "./ColorCode";
import {KeyboardTypeOptions} from "react-native";

const DefaultTextInput = styled.TextInput`
  width: 100%;
  border-radius: 16px;
  height: 44px;
  padding: 4px 10px;
  background-color: ${defaultInputBG};
  color: ${defaultInputFC};
`

type DefaultInputProps = {
    keyboardType?: KeyboardTypeOptions,
    style?: any,
    value?: string,
    placeholder?: string,
    isClearable?: boolean,
    onChangeText?: (param?: any) => any
}

const CukiInput = (props?: PropsWithChildren<DefaultInputProps>) => {
    return (
        <DefaultTextInput
            keyboardType={props?.keyboardType || 'default'}
            style={props?.style}
            placeholder={props?.placeholder}
            value={props?.value}
            onChangeText={(text: string) => {
                if (props?.onChangeText) {
                    props?.onChangeText(text)
                }
            }}
        />
    )
}

export default CukiInput
