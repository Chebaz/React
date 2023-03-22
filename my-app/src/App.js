import React from "react";
import HelloWorld from "./Hello";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import ClickTraker from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import UncotrolledLogin from "./UncontrolledLogin";
import TodoList from "./TodoList";
import Container from "./Container";
import Welcome from "./Welcome";
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
        <div>
          <TodoList />
        </div>
        <Container title={<h1>prova-titolo</h1>}>
          <Welcome name="Marco" />
          <p>serve a verificare se ho capito i container</p>
        </Container>
      </div>
    );
  }
}
