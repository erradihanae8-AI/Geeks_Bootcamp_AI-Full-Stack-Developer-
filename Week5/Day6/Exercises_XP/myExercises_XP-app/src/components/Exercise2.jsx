
import React, { Component } from "react";

class Exercise2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "red"
    };
  }

  
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow"
      });
    }, 1000);
  }

  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({
      favoriteColor: "blue"
    });
  };

  render() {
    return (
      <div className="container">
        <h2>
          My favorite color is {this.state.favoriteColor}
        </h2>

        <button onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

export default Exercise2;
