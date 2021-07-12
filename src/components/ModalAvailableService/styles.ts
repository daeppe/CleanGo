import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  button {
    display: initial;
    align-self: center;
    margin: 0.5rem;
  }
  @media only screen and (min-width: 426px) {
    button {
      display: none;
    }
  }
`;
export const ContainerRow = styled(ContainerInfo)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    display: none;
  }
  @media only screen and (min-width: 426px) {
    button {
      display: initial;
    }
  }
`;
export const CloseIcon = styled(FaTimes)`
  fill: black;
  width: 20px;
  height: 20px;
`;
export const TitleModal = styled.h1`
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 2px solid var(--gray);
  padding: 0 0.5rem 0.5rem;
`;
export const ServiceClass = styled.h2`
  font-family: var(--font-standard);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem;
`;

export const Subtitles = styled.h3`
  font-family: var(--font-standard);
  font-size: 18px;
  font-weight: 700;
  padding: 0.5rem;
`;
export const Adress = styled.p`
  font-family: var(--font-standard);
  font-size: 18px;
  padding: 0.5rem;
`;
export const GeneralInfo = styled.h4`
  font-family: var(--font-standard);
  font-size: 20px;
  font-weight: 400;
  padding: 0 0.5rem 0;
  .price {
    color: var(--green);
  }
`;
export const ServiceDetails = styled.ul`
  li {
    font-family: var(--font-standard);
    font-size: 18px;
    padding: 0 0.5rem 0;
  }
`;
