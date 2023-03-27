import React from "react";
import { GitHubUser } from "./GithubUser";
import { Link } from "react-router-dom";
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
            <Link to={`/users/:${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
