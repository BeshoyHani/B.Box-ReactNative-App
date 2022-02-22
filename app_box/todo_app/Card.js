import React, { Component, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Card(props) {
    const [isChecked, setCheck] = useState(false);

    return (
        <View style={style.container}>
            <TouchableOpacity style={[style.checkbox, isChecked && { backgroundColor: "seashell" }]}
                onPress={() => {
                    setCheck(!isChecked);
                }}
            >
                {
                    isChecked &&
                    <Image source={require("../../assets/true.png")} style={[style.icon, { marginTop: -5 }]} />
                }
            </TouchableOpacity>

            <Text style={style.task_text} numberOfLines={1}> {props.task} </Text>

            <TouchableOpacity>
                <Image source={require("../../assets/edit.png")} style={[style.icon, { marginLeft: 10 }]} ></Image>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { props.delete() }} >
                <Image source={require("../../assets/trash.png")} style={[style.icon, { marginLeft: 10 }]}></Image>
            </TouchableOpacity>
        </View>
    );

}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "98%",
        alignItems: "center",
        height: 35,
        //borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "gray",
        marginBottom: 5,

    },

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "gray",
        marginLeft: 10,
    },

    task_text: {
        fontSize: 18,
        color: "dimgray",
        width: "65%",
        marginLeft: 5
    },

    icon: {
        width: 25,
        height: 25,
        alignSelf: "center",
    },
});