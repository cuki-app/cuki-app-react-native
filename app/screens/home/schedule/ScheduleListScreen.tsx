import React from "react";
import styled from "styled-components/native";
import {LayoutAnimation, SafeAreaView, StyleSheet, Text, View} from "react-native";
import CukiButton from "../../../components/CukiButton";

const DefaultListView = styled.FlatList`
  background-color: white;
`

const arr: Array<string> = [];
for (let i = 0; i < 100; i++) {
    arr.push(i.toString());
}


const Item = ({num}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{num}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        height: 100,
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 50,
    },
});

const ScheduleListScreen = () => {
    const [toggleCommandBox, setToggleCommandBox] = React.useState(false)
    return (
        <SafeAreaView style={{backgroundColor: 'gray'}}>
            {toggleCommandBox &&
            <View
                style={{
                    padding: 20
                }}
            >
                <CukiButton type={'PRIMARY'}>일정 등록하기</CukiButton>
            </View>
            }
            <DefaultListView
                style={{
                    borderTopLeftRadius: toggleCommandBox ? 16 : 0,
                    borderTopRightRadius: toggleCommandBox ? 16 : 0
                }}
                keyExtractor={item => item.toString()}
                data={arr}
                renderItem={({item}) => <Item num={item}/>}
                onScroll={(e) => {
                    console.log(e.nativeEvent.contentOffset.y)
                    if (e.nativeEvent.contentOffset.y < -50) {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                        setToggleCommandBox(true)
                    }
                    if (e.nativeEvent.contentOffset.y > 50) {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                        setToggleCommandBox(false)
                    }
                }}
            />
        </SafeAreaView>
    )
}

export default ScheduleListScreen;
