import styled from "styled-components";

export const InputFeed = styled.input`
    background: rgba(255,255,255,0.75);
    border: 3px solid var(--green);
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    height: 100px;
    font-size: 1rem;
    font-family: var(--font-standard);
    padding: 0.5rem;
    -webkit-transition: all 300ms;
    transition: all 300ms;
    &::placeholder{
      position: absolute;
      color: var(--gray);
      padding: 0.5rem;
      font-size: 1.3rem;
    }
`;