import React from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends React.Component {
  state = {
    nome: "",
  };
  handleUsernameInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          name="nome"
          value={this.state.username}
          onChange={this.handleUsernameInputChange}
        />
        <Welcome nome={this.state.nome} age="14" />
      </div>
    );
  }
}
