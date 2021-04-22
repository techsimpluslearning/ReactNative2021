import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("I am Cons...");
    this.state = {
      clicked: 1,
      clicked2: 2,
    };
  }

  onButtonClick = () => {
    this.setState({ clicked: this.state.clicked + 1 });
  };

  onButtonClick2 = () => {
    this.setState({ clicked2: this.state.clicked2 + 1 });
  };

  render() {
    console.log("I am render");
    return (
      <div>
        <button onClick={this.onButtonClick}>
          You Clicked {this.state.clicked} Times
        </button>
        <button onClick={this.onButtonClick2}>
          You Clicked {this.state.clicked2} Times
        </button>
      </div>
    );
  }
}

export default Counter;
