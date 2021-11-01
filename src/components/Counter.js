import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <button className="button" onClick={this.decrement}>
          -
        </button>
        <span>{this.state.count}</span>
        <button className="button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}
