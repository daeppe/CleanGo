import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import {
  ContainerLoginForm,
  ContainerLogin,
  ContainerDescription,
} from "./styles";

const LoginPage = () => {
  return (
    <>
      <Header>{}</Header>
      <ContainerLogin>
        <ContainerLoginForm id="form">
          <FormLogin />
        </ContainerLoginForm>
        <ContainerDescription id="description"></ContainerDescription>
      </ContainerLogin>
    </>
  );
};

export default LoginPage;
