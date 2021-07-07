import styled from "styled-components";
import WorkDesktop from "../../asssets/images/trabalhe-conosco-desktop.png";
import WorkMobile from "../../asssets/images/trabalhe-conosco-mobile.jpg";
export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
export const SectionStyled = styled.section`
  display: flex;
  flex-direction: row;
`;
export const SectionPartner = styled(SectionStyled)`
  background-image: url(${WorkDesktop});
  background-size: cover;
`;
export const Title = styled.h1`
  font-size: 36px;
  font-family: var(--font-secondary);
`;
export const Description = styled.p`
  font-family: var(--font-standard);
  font-size: 20px;
  text-align: right;
`;
export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 628px;
  justify-content: flex-start;
`;
