import { screen } from "@testing-library/react";
import styled from "styled-components";

import ArrowDown from "../../asssets/svg/arrowdown.svg";
import LineDivisor from "../../asssets/svg/horizontal-line.svg";

interface NavigationTabProps {
  active: boolean;
}
interface WrapperTabsProps {
  sectionForm: number;
}

export const Container = styled.main`
  padding-top: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperForm = styled.section`
  width: 95vw;
  max-width: 780px;
  background-color: var(--white);
  padding: 42px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 600px) {
    padding: 42px 64px;
  }
`;

export const TitleForm = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--green);
  font-family: var(--font-secondary);
  margin-bottom: 2rem;
  transition: all 400ms;

  @media screen and (min-width: 600px) {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`;

export const WrapperTabs = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 500px;
  max-width: 650px;
  position: absolute;
  left: 64px;
  top: 140px;
  transition: all 400ms;

  transform: ${(props: WrapperTabsProps) =>
    props.sectionForm === 1
      ? "translateX(0px)"
      : props.sectionForm === 2
      ? "translateX(-33%)"
      : "translateX(-60%)"};

  @media screen and (min-width: 325px) {
    top: 110px;
  }

  @media screen and (min-width: 600px) {
    transform: translateX(0px);
    top: 140px;
  }
`;

export const NavigationTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props: NavigationTabProps) =>
    props.active ? "default" : "pointer"};
  opacity: ${(props: NavigationTabProps) => (props.active ? "100%" : "50%")};

  > div:first-child {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.3rem;

    > span {
      color: var(--white);
      font-family: var(--font-secondary);
      font-size: 0.9rem;
      font-weight: 700;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
      font-family: var(--font-secondary);
      color: var(--black);
      font-weight: 700;
    }
  }
`;

export const Separator = styled.div`
  flex: 1;
  width: 100%;
  height: 1rem;
  background: url(${LineDivisor}) center repeat-x;
  margin: auto 0.4rem;
  transform: translateY(6px);
  opacity: 0.2;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1rem;
  width: 100%;

  button {
    margin-top: 2rem;
    max-width: 200px;
  }

  > span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 0.5rem;
  }
`;

export const WrapperDoubleInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    width: 100%;
  }

  @media screen and (min-width: 480px) {
    flex-direction: row;

    div {
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const SelectStyled = styled.select`
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid #313630;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  font-family: var(--font-standard);
  padding: 0.5rem;
  position: relative;
  z-index: 2;

  &::placeholder {
    color: var(--gray);
  }

  appearance: none;
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

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${ArrowDown}) no-repeat center center;
    width: 26px;
    height: 48px;
    position: absolute;
    right: 10px;
    bottom: 0;
    z-index: 1;
  }
`;
export const ErrorMessage = styled.span`
  font-family: var(--font-standard);
  color: tomato;
  padding: 0.5rem;
`;

export const WrapperInputsRadio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;

  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ContainerTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const TextAreaStyled = styled.textarea`
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
`;
