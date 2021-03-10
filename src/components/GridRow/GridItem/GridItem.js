import React from "react";
import "./GridItem.css";

export default class GridItem extends React.Component {
  constructor() {
    super();
    this.clickfn = this.clickfn.bind(this);
  }
  clickfn() {
    this.props.playerClickCB(this.props.rowIdx, this.props.colIdx);
  }
  render() {
    return (
      <div className="grid-item" onClick={this.clickfn}>
        {this.props.value}
      </div>
    );
  }
}
