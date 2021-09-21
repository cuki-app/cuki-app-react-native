import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {ListRenderItem, NativeScrollEvent, NativeSyntheticEvent, SafeAreaView} from "react-native";

const DefaultFlatList = styled.FlatList`
  width: 100%;
`

export type CukiListProps<ItemT> = {
    style?: any,
    onRefresh?: (() => void) | null,
    keyExtractor?: (item: ItemT, index: number) => string,
    data: ReadonlyArray<ItemT> | null | undefined,
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void,
    renderItem: ListRenderItem<ItemT> | null | undefined,
}

const CukiList = (props?: PropsWithChildren<CukiListProps<any>>) => {
    return (
        <SafeAreaView>
            <DefaultFlatList
                style={{...props?.style}}
                keyExtractor={props?.keyExtractor}
                data={props?.data}
                renderItem={props?.renderItem}
                onScroll={props?.onScroll}
                onRefresh={props?.onRefresh}
            >
                {props?.children}
            </DefaultFlatList>
        </SafeAreaView>
    )
}

export default CukiList;
