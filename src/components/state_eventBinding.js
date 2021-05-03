import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //   clickHandler = () => {
  //     this.setState(
  //       {
  //         count: this.state.count + 1,
  //       },
  //       () => {
  //         console.log(this.state.count);
  //       }
  //     );
  //   };

  clickHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  countBy5 = () => {
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
  };

  countByAny = (num) => {
    this.setState((prevState) => ({
      count: prevState.count + num,
    }));
  };

  getAlert = (msg) => {
    alert(msg);
  };

  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <button onClick={this.clickHandler}>
          You Clicked Me... {this.state.count}
        </button>

        <button onClick={this.countBy5}>Count By 5 - {this.state.count}</button>
        <button onClick={() => this.countByAny(15)}>
          Count By Any - {this.state.count}
        </button>

        <button onClick={() => this.getAlert("Hello Prateek")}>
          Get Alert
        </button>
      </div>
    );
  }
}

export default State;
