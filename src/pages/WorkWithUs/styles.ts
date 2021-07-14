import styled from "styled-components";
import WorkDesktop from "../../asssets/images/trabalhe-conosco-desktop.png";
import WorkMobile from "../../asssets/images/home2.png";
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark-green);
  margin-top: -90px;
  position: relative;
  /* min-height: 100vh; */
`;
export const SectionStyled = styled.section`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const SectionPartner = styled(SectionStyled)`
  margin: 5.5rem 0 2.5rem;
  background-image: url(${WorkMobile});
  background-size: 130% 130%;
  background-repeat: no-repeat;
  background-position: top left;
  justify-content: flex-end;

  @media only screen and (min-width: 768px) {
    background-image: url(${WorkDesktop});
  }
`;
export const SectionWhowItWorks = styled(SectionStyled)`
  flex-direction: column;
  padding: 5rem 0;
  h1 {
    margin: 0 0 3rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 6rem 0;
    h1 {
      margin: 0 0 5rem;
    }
  }
`;
export const SectionReasons = styled(SectionStyled)`
  flex-direction: column;
  background-color: var(--dark-green);
  h1 {
    color: var(--white);
  }
  padding: 5rem 0;
`;
export const Title = styled.h1`
  font-family: var(--font-secondary);
  padding: 8px;
  font-size: 1.5rem;
  .whowItWorks,
  .beAParter {
    font-size: 2rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    .whowItWorks {
      text-align: center;
      width: 100%;
    }
  }
`;
export const Description = styled.p`
  font-family: var(--font-standard);
  font-size: 20px;
  line-height: 30px;
  padding: 0.5rem 0 3rem;
  text-align: right;
  width: 90%;

  @media only screen and (min-width: 768px) {
    width: 560px;
  }
`;
export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  height: 350px;
  @media only screen and (min-width: 768px) {
    height: 628px;
    margin: 0 2rem;
  }
  margin: 0 1rem;
`;
