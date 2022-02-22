import React, { Component } from "react";
import { Button, TextInput, View } from "react-native";
import DisplayNum from "./DisplayNum";

export default class GenerateRandom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            low: '',
            high: '',
            randomNum: ''
        }
    }

    generate = () => {
        if (this.state.low == "")
            alert("Low Can't be Empty");

        else if (this.state.high == "")
            alert("High Can't be Empty");

        else if (Number(this.state.low) > Number(this.state.high))
            alert("Low Must be Less Than High");

        else {
            let max = Number(this.state.low);
            let min = Number(this.state.high);
            let randNum = Math.floor( Math.random() * (max-min+1) +min );
            this.setState({ randomNum: randNum });
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#929292", justifyContent: "center", alignItems: "center" }}>

                <DisplayNum num={this.state.randomNum} />
                <TextInput
                    placeholder={"Low"}
                    style={{ backgroundColor: "yellow", paddingHorizontal: 20, marginTop: 10 }}
                    onChangeText={(value) => {
                        this.setState({ low: value })
                    }}
                    keyboardType={"numeric"}
                />

                <TextInput
                    placeholder={"High"}
                    style={{ backgroundColor: "yellow", paddingHorizontal: 20, marginVertical: 10 }}
                    onChangeText={(value) => {
                        this.setState({ high: value })
                    }}
                    keyboardType={"numeric"}
                />

                <Button
                    title={"Generate Random Number"}
                    color="red"
                    onPress={this.generate}
                />
            </View>

        )
    }

}