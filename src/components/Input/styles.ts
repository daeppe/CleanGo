import styled from "styled-components";

export const InputStyled = styled.input`
  background: rgba(255, 255, 255, 0.75);
  border: 2px solid #313630;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 1rem;
  font-family: var(--font-standard);
  padding: 0.5rem;
  width: 240px;
  height: 40px;
  ::placeholder {
    color: var(--gray);
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
  margin-left: 2rem;
`;
export const ErrorMessage = styled.span`
  font-family: var(--font-standard);
  color: tomato;
  padding: 0.5rem;
`;
