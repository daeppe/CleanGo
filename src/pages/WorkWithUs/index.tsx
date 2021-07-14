import Header from "../../components/Header";
import {
  Container,
  ContainerInner,
  SectionReasons,
  SectionPartner,
  SectionWhowItWorks,
  Title,
  Description,
  ProNav,
  BtnPro,
  Links,
} from "./styles";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import { History } from "history";
import CardWorkWithUs from "../../components/CardWorkWithUs";
import CardReasons from "../../components/CardReasons";
import { ButtonUp } from "../Home/styles";

const WorkWithUs = () => {
  const history: History = useHistory();
  const handleClick = (): void => {
    history.push("/cadastroparceiro");
  };
  return (
    <>
      <Header whiteSchema>
        <ProNav>
          <Links to="/login">Login</Links>
          <BtnPro to="/cadastroparceiro">Cadastro</BtnPro>
        </ProNav>
      </Header>
      <Container>
        <SectionPartner>
          <ContainerInner>
            <Title id="BeAPartner">Seja um parceiro CleanGo</Title>
            <Description>
              Entre para o CleanGo, veja seu número de clientes multiplicarem,
              trabalhe de forma prática, segura e eficiente. Com ganhos acima da
              média do mercado!
            </Description>
            <Button type="button" onClickFunc={handleClick}>
              Cadastre-se como profissional
            </Button>
          </ContainerInner>
        </SectionPartner>
        <SectionWhowItWorks>
          <Title id="whowItWorks">Como funciona</Title>
          <CardWorkWithUs />
        </SectionWhowItWorks>
        <SectionReasons>
          <Title>Por que ser um parceiro CleanGo?</Title>
          <CardReasons />
        </SectionReasons>
        <ButtonUp
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        ></ButtonUp>
      </Container>
    </>
  );
};
export default WorkWithUs;
