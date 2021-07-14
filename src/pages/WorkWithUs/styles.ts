import styled from "styled-components";
import WorkDesktop from "../../asssets/images/trabalhe-conosco-desktop.png";
import WorkMobile from "../../asssets/images/trabalhe-conosco-mobile.jpg";
import { NavLink } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark-green);
  margin-top: -90px;
`;
export const SectionStyled = styled.section`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  align-items: center;
  justify-content: center;
`;
export const SectionPartner = styled(SectionStyled)`
  margin: 90px 0;
  background-image: url(${WorkDesktop});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  justify-content: flex-end;
`;
export const SectionWhowItWorks = styled(SectionStyled)`
  flex-direction: column;
  h1 {
    margin: 16px 0 32px;
  }
`;
export const SectionReasons = styled(SectionWhowItWorks)`
  background-color: var(--dark-green);
  h1 {
    color: var(--white);
  }
`;
export const Title = styled.h1`
  font-size: 36px;
  font-family: var(--font-secondary);
  padding: 8px;

  #whowItWorks {
    text-align: center;
    width: 100%;
  }
`;
export const Description = styled.p`
  font-family: var(--font-standard);
  font-size: 20px;
  line-height: 30px;
  padding: 8px;
  text-align: right;
  width: 560px;
`;
export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  height: 628px;
  margin: 0 32px;
`;

export const ProNav = styled.nav`
display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 97px 1rem;

  @media screen and (min-width: 840px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  
`;

export const Links = styled(NavLink)`
  color: var(--white);
  font-weight: 500;
  width: 100%;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  margin: 0rem 0 0.5rem;
  text-align: right;
  border-bottom: 1px solid var(--gray);
  transition: all 350ms;

  &:hover {
    color: var(--green);
  }

  @media screen and (min-width: 840px) {
    margin-bottom: 0px;
    padding-bottom: 0;
    border-bottom: none;
    width: auto;

    margin: 0;
    margin-right: 18px;
  }
`;

export const BtnPro = styled(NavLink)`
  background-color: var(--white);
  color: var(--green);
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 1rem;

  @media screen and (min-width: 840px) {
    margin-top: 0rem;
  }
  &:hover {
    color: #1890ff;
  }

   @media screen and (min-width: 840px) {
    margin-top: 0rem;
  }
`;