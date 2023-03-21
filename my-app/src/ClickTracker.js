import React from "react";

export default class ClickTraker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastClick: "",
    };
  }
  handleLastClick(event) {
    const nome = event.target.id;
    this.setState(() => ({
      lastClick: nome,
    }));
  }
  render() {
    return (
      <div>
        <button id="left Button" onClick={this.handleLastClick.bind(this)}>
          leftButton
        </button>
        <button id="center Button" onClick={this.handleLastClick.bind(this)}>
          centerButton
        </button>
        <button id="right Button" onClick={this.handleLastClick.bind(this)}>
          rightButton
        </button>
        <h2>last click: {this.state.lastClick}</h2>
      </div>
    );
  }
}
