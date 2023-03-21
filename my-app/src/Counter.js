import React from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValuer,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.incrementMount,
      }));
    }, this.props.incrementInterval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}
