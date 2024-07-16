import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useUser() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { userId } = useParams();

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://my-json-server.typicode.com/Mohamed-Saad-02/jopFairTask/customers?id=${userId}&_embed=transactions`
        );
        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, [userId]);

  return { user, isLoading, error };
}
