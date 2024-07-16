import SearchBy from "../../ui/SearchBy";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function UserTableOperation() {
  return (
    <TableOperations>
      <SearchBy />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "amount-asc", label: "Sort by price (low first)" },
          { value: "amount-desc", label: "Sort by price (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default UserTableOperation;
