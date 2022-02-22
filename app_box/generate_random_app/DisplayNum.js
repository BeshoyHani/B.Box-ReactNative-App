import React, { Component } from "react";
import { View, Text } from "react-native";

export default class DisplayNum extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ width:200, height:200, borderRadius:100, backgroundColor: "yellow", justifyContent: "center", alignItems: "center" }}>
                <Text style={{fontSize:48}}>{this.props.num} </Text>

            </View>

        )
    }

}