import React, { Component } from "react";

export default class FlashItem extends Component {
  handleClick = () => {
    this.props.flashFn.deleteFlashAc(this.props.id);
  };
  render() {
    return (
      <div className={`alert ${this.props.type}`}>
        {this.props.text}
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={this.handleClick}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
