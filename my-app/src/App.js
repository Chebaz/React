import React from "react";
import { Welcome } from "./Welcome";
import { Sum } from "./Sum";
import { Counter } from "./Counter";
import { GitHubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { UseCount } from "./CounterButton";
import { Form } from "./Form";
import { CarDetails } from "./CarDetails";
export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Sum array={[1, 2, 3, 4, 5, 6]} />
        <Counter />
        <GitHubUser username="Chebaz" />
        <GithubUserList
          usernames={["Chebaz", "AnastasiaGandolfi", "georgev-97"]}
        />
        <UseCount />
        <Form />
        <div>
          <br />
          <CarDetails
            data={{
              model: "",
              year: "",
              color: "",
            }}
          />
        </div>
      </div>
    );
  }
}
