import React from "react";
import HelloWorld from "./Hello";
import Welcome from "./Welcome";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Welcome nome={<strong>Simone</strong>} age="64" />
      </div>
    );
  }
}
