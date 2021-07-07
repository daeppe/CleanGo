import FormRegister from "../../components/FormRegister";
import Header from "../../components/Header";
import {
  ContainerRegisterForm,
  ContainerRegister,
  ContainerDescription,
} from "./styles";

const RegisterPage = () => {
  return (
    <>
      <Header>{}</Header>
      <ContainerRegister>
        <ContainerDescription id="description">
          <div>
            <h2>A melhor opção para os serviços da sua residência</h2>
            <p>
              Oferecimos a equipe mais confiável e experiente, pronta para
              oferecer serviços de limpeza e consertor gerais de qualidade e o
              cuidado especial que você merece!
            </p>
          </div>
        </ContainerDescription>
        <ContainerRegisterForm>
          <FormRegister />
        </ContainerRegisterForm>
      </ContainerRegister>
    </>
  );
};

export default RegisterPage;
