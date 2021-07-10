import { useEffect } from "react";
import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import TitlePage from "../../components/TitlePage";
import { useTheme } from "../../providers/Theme";
import {
  ContainerLoginForm,
  ContainerLogin,
  ContainerDescription,
} from "./styles";

const LoginPage = () => {
  const { handleBackground } = useTheme();

  useEffect(() => {
    handleBackground(false);
  }, [handleBackground]);

  return (
    <>
      <TitlePage />
      <Header>
        <HeaderNav />
      </Header>
      <ContainerLogin>
        <ContainerLoginForm>
          <FormLogin />
        </ContainerLoginForm>
        <ContainerDescription id="description">
          <div>
            <h2>Te conectamos aos melhores profissionais</h2>
            <p>
              Facilitamos a vida de milhares de pessoas, levando comodidade e
              praticidade para seus afazeres do lar!
            </p>
          </div>
        </ContainerDescription>
      </ContainerLogin>
    </>
  );
};

export default LoginPage;
