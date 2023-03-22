import React from "react";

export default class List extends React.Component {
  handleRemoveItem = (index) => {
    this.props.remove(index);
  };
  render() {
    const items = this.props.items.map((item, index) => (
      <li key={index}>
        {item}
        <button onClick={() => this.handleRemoveItem(index)}>Remove</button>
      </li>
    ));

    return <ul>{items}</ul>;
  }
}
