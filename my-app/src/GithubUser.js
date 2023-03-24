import React, { useEffect, useState } from "react";
export function GitHubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!username) {
      return;
    }
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, [username]);

  return (
    <div>
      {!user && <p>Loading...</p>}
      <h1>{user?.name}</h1>
      <p>{user?.bio}</p>
    </div>
  );
}
