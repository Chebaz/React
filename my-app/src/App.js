import React from "react";
import { Welcome } from "./Welcome";
import { Sum } from "./Sum";
import { Counter } from "./Counter";
import { GitHubUser } from "./GithubUser";
export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Sum array={[1, 2, 3, 4, 5, 6]} />
        <Counter />
        <GitHubUser username="Chebaz" />
      </div>
    );
  }
}
