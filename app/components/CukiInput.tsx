import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {defaultInputBG, defaultInputFC} from "./ColorCode";
import {Image} from "react-native";

const DefaultTextInput = styled.TextInput`
  width: 100%;
  border-radius: 16px;
  height: 44px;
  padding: 4px 10px;
  background-color: ${defaultInputBG};
  color: ${defaultInputFC};
`

const ClearButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`

type DefaultInputProps = {
    style?: any,
    value?: string,
    placeholder?: string,
    isClearable?: boolean,
    onChangeText?: (param?: any) => any
}

const defaultInput = (props?: React.PropsWithChildren<DefaultInputProps>) => {
    return (
        <DefaultTextInput
            style={props?.style}
            placeholder={props?.placeholder}
            value={props?.value}
            onChangeText={(text: string) => {
                if (props?.onChangeText) {
                    props?.onChangeText(text)
                }
            }}
        >
            {props?.isClearable ?
                (
                    <ClearButton
                        onPress={() => {
                            if (props?.onChangeText) {
                                props?.onChangeText('')
                            }
                        }}
                    >
                        <Image
                            source={require('../assets/images/input-cancel.png')}
                            style={{height: 16, width: 16}}
                        />
                    </ClearButton>
                ) : null
            }
        </DefaultTextInput>
    )
}

const CukiInput = (props?: PropsWithChildren<DefaultInputProps>) => {
    return defaultInput(props)
}

export default CukiInput
