import styled from "styled-components";

export const HeaderBar = styled.header`
  width: 100vw;
  padding: 12px 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  background: transparent;
  img {
    height: 48px;
  }

  nav {
    margin-right: 50px;
    display: flex;
    justify-content: space-between;
  }
`;
