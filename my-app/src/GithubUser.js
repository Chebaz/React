import React from "react";
import { useGithubUser } from "./useGithubUser";
export function GitHubUser({ username }) {
  const { user } = useGithubUser(username);
  return (
    <div>
      {!user && <p>Loading...</p>}
      <h1>{user?.name}</h1>
      <p>{user?.bio}</p>
    </div>
  );
}
