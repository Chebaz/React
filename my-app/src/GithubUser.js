import React from "react";
import { useGithubUser } from "./useGithubUser";
export function GitHubUser({ username }) {
  const { userData, isLoading, error } = useGithubUser(username);

  if (isLoading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!userData) {
    return null;
  }
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
    </div>
  );
}
