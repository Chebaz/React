import React from "react";

export default class CounterDisplay extends React.Component {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}
