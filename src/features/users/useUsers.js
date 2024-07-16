import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { PAGE_SIZE } from "../../utils/constants";

export function useUsers() {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? 1;

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://my-json-server.typicode.com/Mohamed-Saad-02/jopFairTask/customers?_page=${page}&_per_page=${PAGE_SIZE}&_embed=transactions`
        );
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUsers();
  }, [page]);

  return { users, isLoading, error };
}
