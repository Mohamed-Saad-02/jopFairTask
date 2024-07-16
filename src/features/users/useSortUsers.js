import { useSearchParams } from "react-router-dom";

export function useSortUsers(data) {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") ?? "data-asc";
  const [filed, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  const compareCharacter = (a, b) => {
    if (modifier === 1) return a[filed].localeCompare(b[filed]);
    if (modifier === -1) return b[filed].localeCompare(a[filed]);
  };

  const compareAmount = (a, b) => {
    let totalA = a.transactions.at(-1).amount;
    let totalB = b.transactions.at(-1).amount;
    return (totalA - totalB) * modifier;
  };

  const sortedUsers =
    filed === "data"
      ? data
      : filed === "name"
      ? data?.toSorted(compareCharacter)
      : data?.toSorted(compareAmount);

  return sortedUsers;
}
