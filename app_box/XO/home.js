import React, { useState } from "react";
import {Pressable, StyleSheet, View, Text} from 'react-native'

export default function HomeScreen(props) {
    return (
        <View style={style.container}>
            <Pressable
                    style={[style.btn, { backgroundColor: "green" }]}
                    onPress={() => props.navigation.navigate('SinglePlayer')}
                >
                    <Text style={style.btn_txt}>One Player</Text>
                </Pressable>

                <Pressable
                    style={[style.btn, { backgroundColor: "red" }]}
                    onPress={() => props.navigation.navigate('MultiPlayers')}
                >
                    <Text style={style.btn_txt}>Two Players</Text>
                </Pressable>
        </View>
        );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'stretch'
    },

    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 40,
        margin:10,
        borderRadius: 4,
        elevation: 3,
        borderRadius: 10
    },

    btn_txt: {
        color: "white",
        fontWeight: 'bold',
    }

});