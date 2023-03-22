import React from "react";
import List from "./List";
export default class TodoList extends React.Component {
  state = {
    stuff: "",
    array: ["esercizi", "checkpoint", "calcio", "studio"],
  };
  handleInputChange = (elem) => {
    const add = elem.target.value;
    this.setState({
      stuff: add,
    });
  };
  addThing = () => {
    this.state.array.push(this.state.stuff);
    this.setState({
      stuff: "",
    });
  };
  reset = () => {
    this.state.array.splice(0, this.state.array.length);
    this.setState({
      array: [],
    });
  };
  remove = (index) => {
    this.state.array.splice(index, 1);
    this.setState({
      array: [...this.state.array],
    });
  };
  render() {
    return (
      <div>
        <div>
          <List items={this.state.array} remove={this.remove} />
        </div>
        <input
          name="stuff"
          type="text"
          value={this.state.stuff}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addThing}>Add</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
