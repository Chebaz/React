import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
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
        <button>Login</button>
      </div>
    );
  }
}
