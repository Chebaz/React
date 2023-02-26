import React from "react";

function sum(a, b) {
  return a + b;
}
export default class HelloWorld extends React.Component {
  render() {
    return <h2>{sum(2, 3)}</h2>;
  }
}
