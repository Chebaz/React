import React from "react";
import HelloWorld from "./Hello";
import Welcome from "./Welcome";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Welcome nome="John" age="14" />
      </div>
    );
  }
}
