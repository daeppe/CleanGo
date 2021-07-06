import styled, { css } from "styled-components";

interface ButtonStyledProps {
  whiteSchema: boolean;
}

export const ButtonItem = styled.button`
  background: var(--green);
  color: var(--white);
  ${(props: ButtonStyledProps) =>
    props.whiteSchema &&
    css`
      background: transparent;
      color: var(--green);
      border: 3px solid var(--green);
    `};
  border-radius: 4px;

  height: 50px;
  width: 100%;
  font-size: 18px;
  padding: 6px 32px;

  @media (min-width: 800px) {
    font-size: 22px;
  }
`;
