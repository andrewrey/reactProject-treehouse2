import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState((prevState) => {
        return {
          previousTime: now,
          elapsedTime: prevState.elapsedTime + (now - prevState.previousTime),
        };
      });
    }
  };

  handleStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState((prevState) => ({
        previousTime: Date.now(),
      }));
    }
  };

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? "stop" : `start`}</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
