import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Login Your Account</h2>
        <input
          onChange={this.handleUsernameChange}
          style={Styles.textInput}
          type="text"
          value={this.state.username}
        />
        <br />
        <br />
        <input
          onChange={this.handlePasswordChange}
          style={Styles.textInput}
          type="text"
          value={this.state.password}
        />
        <br />
        <br />
        <button style={Styles.loginButton}>Login</button>
      </div>
    );
  }
}

const Styles = {
  loginButton: {
    width: "100px",
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "#00365A",
    border: "none",
    color: "white",
  },
  textInput: { width: "300px", height: "30px", borderRadius: "10px" },
};

export default LoginForm;
