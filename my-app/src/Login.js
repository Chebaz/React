import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    abilitated: false,
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  onLogin = () => {
    if (this.state.username === "" || this.state.password === "") {
      return;
    } else {
      this.setState({
        username: "",
        password: "",
      });
      alert(
        `username: ${this.state.username} password: ${this.state.password}`
      );
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
          onChange={this.handleInputChange}
        />
        <p>password</p>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <p>checkbox</p>
        <input
          name="remeber"
          type="checkbox"
          value={this.state.remember}
          onChange={this.handleInputChange}
        />
        <button onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}
