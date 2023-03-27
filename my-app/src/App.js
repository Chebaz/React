import React from "react";
import { Welcome } from "./Welcome";
import { Sum } from "./Sum";
import { Counter } from "./Counter";
import { GitHubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { UseCount } from "./CounterButton";
import { Form } from "./Form";
import { CarDetails } from "./CarDetails";
import { Route, Routes, Link } from "react-router-dom";
import { NotFound } from "./NotFound";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Welcome nome="Simone" />} />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/users/:username"
            element={<GitHubUser username="Chebaz" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Link to="/">Welcome</Link>
        <br />
        <Link to="/counter">Counter</Link>
        <br />
        <Link to="/users/:username">Github</Link>
      </div>
    );
  }
}
