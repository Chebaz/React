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
        <Container>
          <h1>questa è una prova con i container</h1>
          <p>serve a verificare se ho capito i container</p>
        </Container>
      </div>
    );
  }
}
