import React from "react";
import { GitHubUser } from "./GithubUser";
import { useState } from "react";

export function GithubUserList({ usernames }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    usernames.push(inputValue);
    setInputValue("");
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="username"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {usernames.map((username) => (
          <li>
            <GitHubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}
