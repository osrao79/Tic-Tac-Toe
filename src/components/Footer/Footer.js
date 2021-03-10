import React from "react";

export default class Footer extends React.Component {
  getText(playerTurn) {
    if (playerTurn === "X") {
      return "Player 1's Turn";
    }
    if (playerTurn === "O") {
      return "Player 2's Turn";
    }
  }
  render() {
    return <div className="turn">{this.getText(this.props.turn)}</div>;
  }
}
