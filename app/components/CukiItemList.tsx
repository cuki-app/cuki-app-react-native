import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {ListRenderItem, NativeScrollEvent, NativeSyntheticEvent, SafeAreaView} from "react-native";

const DefaultFlatList = styled.FlatList`
  width: 100%;
  padding: 0 36px;
  margin-bottom: 135px;
`

export type CukiListProps<ItemT> = {
    style?: any,
    onRefresh?: () => void | null,
    refreshing: boolean,
    onEndReached?: () => void
    onEndReachedThreshold?: number,
    keyExtractor?: (item: ItemT, index: number) => string,
    data: ReadonlyArray<ItemT> | null | undefined,
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void,
    renderItem: ListRenderItem<ItemT> | null | undefined,
}

const CukiList = (props?: PropsWithChildren<CukiListProps<any>>) => {
    return (
        <DefaultFlatList
            style={{...props?.style}}
            keyExtractor={props?.keyExtractor}
            data={props?.data}
            onEndReached={props?.onEndReached}
            onEndReachedThreshold={props?.onEndReachedThreshold}
            renderItem={props?.renderItem}
            onScroll={props?.onScroll}
            onRefresh={props?.onRefresh}
            refreshing={props?.refreshing}
        >
            {props?.children}
        </DefaultFlatList>
    )
}

export default CukiList;
