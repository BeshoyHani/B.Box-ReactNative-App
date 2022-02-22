import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import Counter from "./Counter";

export default class SimpleCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }


    updateCounter = (value) => {
        var counter_value = Number(this.state.counter);
        if (value == 0) {
            if (counter_value == 0)
                alert('0 Can\'t be reset');
            else
                this.setState({ counter: 0 });
        }
        else if (counter_value + Number(value) > 20)
            alert('Counter can\'t exceed 20');
        else if (counter_value + Number(value) < 0)
            alert('Counter can\'t be less than 0');
        else
            this.setState({ counter: counter_value + value });
    }

    render() {
        return (
            <View style={MainScreenStyle.container}>
                <Text style={MainScreenStyle.title}>Simple Counter</Text>

                <Counter updateCounter={this.updateCounter} counter={this.state.counter} />

                <Pressable
                    style={MainScreenStyle.reset_btn}
                    onPress={() => this.updateCounter(0)}
                >
                    <Text style={MainScreenStyle.reset_btn_txt}>Reset</Text>
                </Pressable>
            </View>
        )
    }

}

const MainScreenStyle = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-around',

    },

    title: {
        fontSize: 36,
        fontWeight: 'bold',
    },

    reset_btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'gray',
        borderRadius: 10
    },

    reset_btn_txt: {
        color: "white",
        fontWeight: 'bold',
    }
});