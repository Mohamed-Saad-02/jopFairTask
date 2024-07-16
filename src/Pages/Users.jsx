import UserTableOperation from "../features/users/UserTableOperation";
import Row from "../ui/Row";
import UserTable from "../features/users/UserTable";
import { SearchDataProvider } from "../context/SearchUserDataContext";

function Users() {
  return (
    <SearchDataProvider>
      <Row $type="horizontal">
        <UserTableOperation />
      </Row>
      <Row>
        <UserTable />
      </Row>
    </SearchDataProvider>
  );
}

export default Users;
