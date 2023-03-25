import { useState, useEffect } from "react";

export function useGithubUser(username) {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (username) {
      fetchUser();
    } else {
      setUserData(null);
    }
  }, [username]);

  return { userData, isLoading, error };
}
