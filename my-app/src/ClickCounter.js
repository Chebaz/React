import React from "react";

export default class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countButton: 0,
    };
  }
  handleClick() {
    this.setState((prevState) => ({
      countButton: prevState.countButton + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Counter</button>
        <h2>{this.state.countButton}</h2>
      </div>
    );
  }
}
