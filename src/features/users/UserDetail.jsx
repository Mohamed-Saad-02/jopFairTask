import styled from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useUser } from "./useUser";

import Row from "../../ui/Row";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import UserChart from "./UserChart";

const Charts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const StatsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

function UserDetail() {
  const { isLoading, user = [] } = useUser();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const { id: userId, name, transactions = [] } = user[0] ?? [];

  const totalAmount = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <>
      <Row $type="horizontal">
        <div></div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <StatsStyled $type="horizontal">
        <Stats userId={userId} name={name} amount={totalAmount} />
      </StatsStyled>

      <Charts>
        <UserChart transactions={transactions} totalAmount={totalAmount} />
      </Charts>
    </>
  );
}

export default UserDetail;
