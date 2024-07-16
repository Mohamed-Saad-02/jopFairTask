import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;

  flex: 1;

  @media (max-width: 767px) {
    padding: 4rem 2rem 6.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  height: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
