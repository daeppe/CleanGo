import React, { useState } from "react";
import BackgroundGray from "../../components/BackgroundGray";
import Input from "../../components/Input";

import {
  Container,
  FormStyled,
  NavigationTab,
  Separator,
  TitleForm,
  WrapperForm,
  WrapperTabs,
} from "./styles";

const ProfessionalRegister = () => {
  const [sectionForm, setSectionForm] = useState<number>(1);

  return (
    <BackgroundGray>
      <Container>
        <WrapperForm>
          <TitleForm>Cadastro de profissionais</TitleForm>
          <WrapperTabs sectionForm={sectionForm}>
            <NavigationTab
              active={sectionForm === 1 ? true : false}
              onClick={() => setSectionForm(1)}
            >
              <div>
                <span>1</span>
              </div>
              <div>
                <p>Dados pessoais</p>
              </div>
            </NavigationTab>
            <Separator />
            <NavigationTab
              active={sectionForm === 2 ? true : false}
              onClick={() => setSectionForm(2)}
            >
              <div>
                <span>2</span>
              </div>
              <div>
                <p>Endereço</p>
              </div>
            </NavigationTab>
            <Separator />

            <NavigationTab
              active={sectionForm === 3 ? true : false}
              onClick={() => setSectionForm(3)}
            >
              <div>
                <span>3</span>
              </div>
              <div>
                <p>Seus serviços</p>
              </div>
            </NavigationTab>
          </WrapperTabs>
          <FormStyled>
            <Input
              label="Nome Completo"
              inputType="text"
              placeholder="Digite seu nome"
              errorMessage=""
              error={false}
            />
          </FormStyled>
        </WrapperForm>
      </Container>
    </BackgroundGray>
  );
};

export default ProfessionalRegister;
