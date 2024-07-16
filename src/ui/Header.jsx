import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import Heading from "./Heading";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;

  & button.bars {
    background-color: #eee;
    padding: 6px 8px;
    border-radius: 6px;
    border: 0;
    font-size: 24px;
    transition: 0.3s;
    display: none;
    color: black;
  }

  & button.bars:hover {
    background-color: #ddd;
  }

  @media (max-width: 575px) {
    & button.bars {
      display: block;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as="h2">Users</Heading>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
