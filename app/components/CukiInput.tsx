import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {defaultInputBG, defaultInputFC} from "./ColorCode";
import {
    KeyboardTypeOptions,
    NativeSyntheticEvent,
    Pressable, ReturnKeyTypeOptions,
    TextInputEndEditingEventData,
    TextInputSubmitEditingEventData
} from "react-native";

type DefaultInputProps = {
    keyboardType?: KeyboardTypeOptions,
    returnKeyType?: ReturnKeyTypeOptions,
    style?: any,
    value?: string,
    placeholder?: string,
    onChangeText?: (param?: any) => any,
    onPress?: () => void,
    onFocus?: () => void,
    multiline?: boolean,
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void,
    onEndEditing?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void,
    autoFocus?: boolean
}

const DefaultTextInput = styled.TextInput`
  width: 100%;
  border-radius: 16px;
  height: 44px;
  padding: 4px 10px;
  background-color: ${defaultInputBG};
  color: ${defaultInputFC};
`

const CukiInput = (props?: PropsWithChildren<DefaultInputProps>) => {
    return (
        <Pressable onPress={props?.onPress}>
            <DefaultTextInput
                returnKeyType={props?.returnKeyType}
                autoCompleteType={'off'}
                autoFocus={props?.autoFocus || false}
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
        </Pressable>
    )
}

const HiddenTextInput = styled.TextInput`
  color: #4F4F4F;
  background-color: white;
  font-size: 20px;
`

export const CukiHiddenInput = (props?: PropsWithChildren<DefaultInputProps>) => {
    return (
        <Pressable onPress={props?.onPress}>
            <HiddenTextInput
                returnKeyType={props?.returnKeyType}
                autoFocus={props?.autoFocus || false}
                onFocus={props?.onFocus}
                multiline={props?.multiline || true}
                blurOnSubmit={props?.multiline || true}
                keyboardType={props?.keyboardType || 'default'}
                style={props?.style}
                placeholder={props?.placeholder}
                value={props?.value}
                onChangeText={(text: string) => {
                    if (props?.onChangeText) {
                        props?.onChangeText(text)
                    }
                }}
                onSubmitEditing={props?.onSubmitEditing}
                onEndEditing={props?.onEndEditing}
            />
        </Pressable>
    )
}

export default CukiInput
