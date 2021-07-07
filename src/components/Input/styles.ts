import styled from "styled-components";

export const InputStyled = styled.input`
  background: rgba(255, 255, 255, 0.75);
  border: 2px solid #313630;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  font-family: var(--font-standard);
  padding: 0.5rem;
  &::placeholder {
    color: var(--gray);
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0.4;
  }
`;
export const LabelStyled = styled.label`
  font-family: var(--font-standard);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  padding: 0.5rem;
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ErrorMessage = styled.span`
  font-family: var(--font-standard);
  color: tomato;
  padding: 0.5rem;
`;
