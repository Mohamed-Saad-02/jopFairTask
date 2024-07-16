import { useUsers } from "./useUsers";

import UserRow from "./UserRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useSortUsers } from "./useSortUsers";
import { useSearchDataUser } from "./useSearchDataUser";

function UserTable() {
  const { isLoading, users = [] } = useUsers();

  // 1.Search
  const { handleSearchName, handleSearchTransactions, searchName } =
    useSearchDataUser(users);

  const searched = searchName.length
    ? handleSearchName()
    : handleSearchTransactions();

  // 2.SORT
  const sortedUsers = useSortUsers(searched);

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.4fr 1.8fr 2.2fr 1.8fr 1.8fr 0.8fr 0.4fr">
        <Table.Header>
          <div></div>
          <div>Id</div>
          <div>Name</div>
          <div>Last Amount</div>
          <div>Last Date</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedUsers}
          render={(user) => <UserRow key={user.id} user={user} />}
        />

        <Table.Footer>
          <Pagination countUsers={users.length} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UserTable;
