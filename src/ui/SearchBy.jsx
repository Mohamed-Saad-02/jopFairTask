import styled from "styled-components";
import { useSearchData } from "../context/SearchUserDataContext";

const StyledSearchBy = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

const InputField = styled.input`
  font-size: 1.4rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.$kind === "white"
        ? "var(--color-grey-400)"
        : "var(--color-grey-800)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  width: 32rem;

  &::placeholder {
    font-size: 14px;
    color: ${(props) =>
      props.$kind === "white"
        ? "var(--color-grey-400)"
        : "var(--color-grey-800)"};
  }
`;

function SearchBy() {
  const {
    handleChangeName,
    searchName,
    searchTransactions,
    handleChangeTransactions,
  } = useSearchData();

  return (
    <StyledSearchBy>
      <InputField
        $kind="white"
        type="text"
        placeholder="Search By Name"
        value={searchName}
        onChange={(e) => handleChangeName(e.target.value)}
      />
      <InputField
        $kind="white"
        type="text"
        placeholder="Search By Transaction (Amount-LastDate)"
        value={searchTransactions}
        onChange={(e) => handleChangeTransactions(e.target.value)}
      />
    </StyledSearchBy>
  );
}

export default SearchBy;
