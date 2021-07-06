import { screen } from "@testing-library/react";
import styled from "styled-components";

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
    font-size: 2rem;
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
  margin: 1rem 0;
`;
