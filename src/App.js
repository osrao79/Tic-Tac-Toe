import "./App.css";
import GridRow from "./components/GridRow/GridRow";
import React from "react";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerTurn: "X",
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
    this.playerClick = this.playerClick.bind(this);
  }

  playerClick(i, j) {
    if (this.state.boardState[i][j] === "") {
      const currentBoardState = this.state.boardState;
      currentBoardState[i][j] = this.state.playerTurn;
      this.setState({
        boardState: currentBoardState,
        playerTurn: this.state.playerTurn === "X" ? "O" : "X",
      });
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Tic-Tac-Toe</h1>
        <div id="board">
          {this.state.boardState.map((boardRow, rowIdx) => (
            <GridRow
              key={rowIdx}
              row={boardRow}
              rowIdx={rowIdx}
              playerClickCB={this.playerClick}
            />
          ))}
        </div>
        <Footer turn={this.state.playerTurn} />
      </div>
    );
  }
}
