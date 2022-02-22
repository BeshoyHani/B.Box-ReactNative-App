import React, { Component } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default class Counter extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={counterStyle.container}>
                <Pressable
                    style={[counterStyle.btn, { backgroundColor: "green" }]}
                    onPress={() => this.props.updateCounter(1)}
                >
                    <Text style={counterStyle.btn_txt}>Plus</Text>
                </Pressable>

                <Text>{this.props.counter}</Text>

                <Pressable
                    style={[counterStyle.btn, { backgroundColor: "red" }]}
                    onPress={() => this.props.updateCounter(-1)}
                >
                    <Text style={counterStyle.btn_txt}>Minus</Text>
                </Pressable>
            </View>
        )
    }
}

const counterStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        alignSelf: 'stretch'
    },

    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 4,
        elevation: 3,
        borderRadius: 10
    },

    btn_txt: {
        color: "white",
        fontWeight: 'bold',
    }

});