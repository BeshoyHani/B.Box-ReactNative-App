import { Component } from "react";
import { Alert} from 'react-native';
export default class XO extends Component{
    constructor(props){
        super(props)
        this.state = {
            isCross: true,
          }
        this.board = ["", "", "", "", "", "", "", "", ""];
    }

    drawItem(number) {
        if (this.board[number] == "" && this.winGame() == "") {
          if (this.state.isCross)
            this.board[number] = "X"
          else
            this.board[number] = "O"
    
    
          this.setState({ isCross: !this.state.isCross })
          if (this.winGame() != "")
            Alert.alert(this.winGame() + " Won The Game")
    
          else if (this.gameOver())
            Alert.alert("Draw!")
        }
    
      }
    
      resetGame = () => {
        this.setState({ isCross: true })
        this.board = ["", "", "", "", "", "", "", "", ""]
      }
    
      winGame = () => {
        if (this.board[0] != "" && this.board[0] == this.board[1] && this.board[1] == this.board[2]) {
          return this.board[0]
        } else if (this.board[3] != "" && this.board[3] == this.board[4] && this.board[4] == this.board[5]) {
          return this.board[3]
        } else if (this.board[6] != "" && this.board[6] == this.board[7] && this.board[7] == this.board[8]) {
          return this.board[6]
        } else if (this.board[0] != "" && this.board[0] == this.board[3] && this.board[3] == this.board[6]) {
          return this.board[0]
        } else if (this.board[1] != "" && this.board[1] == this.board[4] && this.board[4] == this.board[7]) {
          return this.board[1]
        } else if (this.board[2] != "" && this.board[2] == this.board[5] && this.board[5] == this.board[8]) {
          return this.board[2]
        } else if (this.board[0] != "" && this.board[0] == this.board[4] && this.board[4] == this.board[8]) {
          return this.board[0]
        } else if (this.board[2] != "" && this.board[2] == this.board[4] && this.board[4] == this.board[6]) {
          return this.board[2]
        } else {
          return ""
        }
      }
    
      getAvailableMovies = () => {
        let availableMoves = [];
        for (let i = 0; i < this.board.length; i++) {
          if (this.board[i] === "")
            availableMoves.push(i);
        }
        return availableMoves;
      }
    
      gameOver = () => {
        return (this.getAvailableMovies().length === 0 || this.winGame() !== "") ? true : false;
      }
    
}