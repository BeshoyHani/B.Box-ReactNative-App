import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Cell from './cell';
import XO from './XO';
const bestMove = require("qm-tictactoe-minimax").bestMove

export default class Board extends XO {

  constructor(props) {
    super(props)
  }
  componentDidUpdate() {
    /*
    if num_of_players == 1 then ai will work
    ai is a module called qm-tictactoe-minimax" which uses mini-max algorithm
    */
    if (!this.state.isCross && this.props.num_of_players === 1) {
      let aiMove = bestMove(this.board, "X")
      this.drawItem(aiMove)
    }
  }


  render() {
    var uiBoard = []; //array each item in it contains a row of the board
    for (let i = 0, index = 0; i < 3; i++, index += 3) {
      uiBoard.push(
        <View style={styles.row} key={i}>
          <Cell index={index} board={this.board} drawItem={() => this.drawItem(index)} />
          <Cell index={index + 1} board={this.board} drawItem={() => this.drawItem(index + 1)} />
          <Cell index={index + 2} board={this.board} drawItem={() => this.drawItem(index + 2)} />
        </View>
      )
    }

    return (

      <ImageBackground source={require("../../assets/background.jpg")} resizeMode="cover" style={styles.container} >
        {uiBoard}
        <TouchableOpacity style={styles.btn} onPress={() => this.resetGame()}>
          <Text style={styles.btn_txt}>Restart Game</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flexDirection: "row",
  },

  btn: {
    margin: 30,
    padding: 10,
    backgroundColor: "#BC9496",
    width: 150,
    borderRadius: 20,
    alignItems: "center"
  },

  btn_txt: {
    color: "#2B2B52",
    fontSize: 20,
    fontWeight: "bold"
  }
});