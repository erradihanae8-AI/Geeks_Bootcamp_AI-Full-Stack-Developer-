
import React, { Component } from "react";

// Child Component
class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted");
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

// Parent Component
class Exercise3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>Exercise 3: Unmounting</h1>

        {this.state.show && <Child />}

        <button onClick={this.deleteChild}>
          Delete Header
        </button>
      </div>
    );
  }
}

export default Exercise3;