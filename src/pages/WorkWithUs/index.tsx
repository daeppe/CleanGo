import Header from "../../components/Header";
import {
  Container,
  ContainerInner,
  SectionStyled,
  SectionPartner,
  Title,
  Description,
} from "./styles";
import Button from "../../components/Button";
const WorkWithUs = () => {
  return (
    <>
      <Header whiteSchema>teste</Header>
      <Container>
        <SectionPartner>
          <ContainerInner>
            <Title>Seja um parceiro CleanGo</Title>
            <Description>
              Entre para o CleanGo, veja seu número de clientes multiplicarem,
              trabalhe de forma prática, segura e eficiente. Com ganhos acima da
              média do mercado!
            </Description>
            <Button type="button">Cadastre-se como profissional</Button>
          </ContainerInner>
        </SectionPartner>
        <SectionStyled>
          <p>as</p>
          <p>as</p>
          <p>as</p>
        </SectionStyled>
      </Container>
    </>
  );
};
export default WorkWithUs;
