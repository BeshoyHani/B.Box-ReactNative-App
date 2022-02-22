import React from "react";
import Board from "./Board";
import { Component } from "react";

export default class SinglePlayer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Board num_of_players={1} style={{ flex: 1, }} />
        )
    }
}