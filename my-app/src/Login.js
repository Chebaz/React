import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };
  handleUsernameInputChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePasswordInputChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleCheckboxClick = (event) => {
    if (this.state.remember) {
      this.setState({ remember: false });
      console.log("falso");
    } else {
      this.setState({ remember: true });
      console.log("vero");
    }
  };
  render() {
    return (
      <div>
        <p>username</p>
        <input
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameInputChange}
        />
        <p>password</p>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordInputChange}
        />
        <p>checkbox</p>
        <input
          name="checkbox"
          type="checkbox"
          value={this.state.remember}
          onChange={this.handleCheckboxClick}
        />
      </div>
    );
  }
}
