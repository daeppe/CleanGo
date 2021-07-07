import { Container, ContainerInner } from "./styles";
import Register from "../../asssets/svg/register.svg";
import Return from "../../asssets/svg/return.svg";
import AppAccess from "../../asssets/svg/app-access.svg";
const CardWorkWithUs = () => {
  return (
    <Container>
      <ContainerInner>
        <img src={Register} alt="cadastro" />
        <h1>Cadastro</h1>
      </ContainerInner>
      <ContainerInner>
        <img src={Return} alt="cadastro" />
        <h1>Aguarde o Retorno</h1>
      </ContainerInner>
      <ContainerInner>
        <img src={AppAccess} alt="cadastro" />
        <h1>Acesso ao Aplicativo</h1>
      </ContainerInner>
    </Container>
  );
};
export default CardWorkWithUs;
