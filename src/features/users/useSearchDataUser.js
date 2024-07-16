import { useSearchData } from "../../context/SearchUserDataContext";

export function useSearchDataUser(data) {
  const { searchName, searchTransactions } = useSearchData();

  const handleSearchName = () =>
    data?.filter((el) =>
      el.name.toLowerCase().includes(searchName.toLowerCase())
    );

  const handleSearchTransactions = () =>
    data?.filter(
      (el) =>
        el.transactions.at(-1).amount.toString().includes(searchTransactions) ||
        el.transactions
          .at(-1)
          .date.split("-")
          .join("")
          .includes(searchTransactions.split("-").join(""))
    );

  return { handleSearchName, handleSearchTransactions, searchName };
}
