import React from "react";
import HelloWorld from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import ClickTraker from "./ClickTracker";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Welcome nome="John" age="14" />
        <Counter
          initialValuer={0}
          incrementInterval={2000}
          incrementMount={2}
        />
        <ClickCounter />
        <ClickTraker />
      </div>
    );
  }
}
