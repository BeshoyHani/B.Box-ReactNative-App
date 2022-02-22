import React from "react";
import { Component } from "react";
import Board from "./Board";

export default class MultiPlayers extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <Board num_of_players={2} style={{flex: 1,}}/>
        )
    }
}