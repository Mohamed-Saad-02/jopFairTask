import UserTableOperation from "../features/users/UserTableOperation";
import Row from "../ui/Row";
import UserTable from "../features/users/UserTable";
import { SearchDataProvider } from "../context/SearchUserDataContext";
import styled from "styled-components";

const StyledUserTable = styled(Row)`
  @media (max-width: 767px) {
    overflow: overlay;
  }

  flex: 1;
  justify-content: center;
`;

function Users() {
  return (
    <SearchDataProvider>
      <Row $type="horizontal">
        <UserTableOperation />
      </Row>
      <StyledUserTable>
        <UserTable />
      </StyledUserTable>
    </SearchDataProvider>
  );
}

export default Users;
