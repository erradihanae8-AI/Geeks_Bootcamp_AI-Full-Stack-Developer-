
import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "../App.css";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    if (this.state.counter >= 5) {
      throw new Error("I crashed!");
    }

    return (
      <div>
        <h2 onClick={this.handleClick}>
          Counter: {this.state.counter}
        </h2>

        <p>Click on the counter to increase it.</p>
      </div>
    );
  }
}

function Exercise1() {
  return (
    <div>
      <h1>Error Boundary Simulation</h1>

      <p>
        Click on the numbers to increase the counters.
        <br />
        The counter is programmed to throw an error
        when it reaches 5.This dimulates a JavaScript error in a component.
      </p>

      <hr />

      <h3>Simulation 1</h3>
      <p>Two counters inside the same ErrorBoundary.</p>

      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h3>Simulation 2</h3>
      <p>Each counter has its own ErrorBoundary.</p>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h3>Simulation 3</h3>
      <p>Counter without ErrorBoundary.</p>

      <BuggyCounter />
    </div>
  );
}

export default Exercise1;