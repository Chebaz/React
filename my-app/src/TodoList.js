import React from "react";
let array = ["esercizi", "checkpoint", "calcio", "studio"];
export default class TodoList extends React.Component {
  state = {
    stuff: "",
  };
  handleInputChenge = (elem) => {
    const add = elem.target.value;
    this.setState({
      stuff: add,
    });
  };
  addThing = () => {
    array.push(this.state.stuff);
    this.setState({
      stuff: "",
    });
    console.log(array);
  };
  render() {
    return (
      <div>
        <ul>
          {array.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <input
          name="stuff"
          type="text"
          value={this.state.stuff}
          onChange={this.handleInputChenge}
        />
        <button onClick={this.addThing}>Add</button>
      </div>
    );
  }
}
