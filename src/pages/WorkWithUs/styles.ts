import styled from "styled-components";
import WorkDesktop from "../../asssets/images/trabalhe-conosco-desktop.png";
import WorkMobile from "../../asssets/images/trabalhe-conosco-mobile.jpg";
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
  margin: 90px 0;
  background-image: url(${WorkDesktop});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  justify-content: flex-end;
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
