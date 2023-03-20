import React from "react";
import HelloWorld from "./Hello";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import ClickTraker from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import UncotrolledLogin from "./UncontrolledLogin";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <InteractiveWelcome />
        <Counter
          initialValuer={0}
          incrementInterval={2000}
          incrementMount={2}
        />
        <ClickCounter />
        <ClickTraker />
        <Login />
        <UncotrolledLogin />
      </div>
    );
  }
}
