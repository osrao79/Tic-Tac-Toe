import React from "react";
import "./GridRow.css";
import GridItem from "./GridItem/GridItem";

export default class GridRow extends React.Component {
  render() {
    return (
      <div className="grid-row">
        {this.props.row.map((boardCell, colIdx) => (
          <GridItem
            value={boardCell}
            colIdx={colIdx}
            rowIdx={this.props.rowIdx}
            playerClickCB={this.props.playerClickCB}
          />
        ))}
      </div>
    );
  }
}
