import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import BackgroundGray from "../../components/BackgroundGray";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InputRadio from "../../components/InputRadio";

import {
  Container,
  FormStyled,
  NavigationTab,
  Separator,
  TitleForm,
  WrapperForm,
  WrapperTabs,
  WrapperDoubleInput,
  LabelStyled,
  SelectStyled,
  ContainerSelect,
  ErrorMessage,
  WrapperInputsRadio,
  ContainerTextArea,
  TextAreaStyled,
} from "./styles";

const ProfessionalRegister = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Todos os campos são obrigatórios"),
    email: yup.string().required("Todos os campos são obrigatórios"),
    cpf: yup.string().required("Todos os campos são obrigatórios"),
    gender: yup.string().required("Todos os campos são obrigatórios"),
    phone: yup.string().required("Todos os campos são obrigatórios"),
    birthday: yup.string().required("Todos os campos são obrigatórios"),
    cep: yup.string().required("Todos os campos são obrigatórios"),
    address: yup.string().required("Todos os campos são obrigatórios"),
    city: yup.string().required("Todos os campos são obrigatórios"),
    district: yup.string().required("Todos os campos são obrigatórios"),
    uf: yup.string().required("Todos os campos são obrigatórios"),
    complement: yup.string().required("Todos os campos são obrigatórios"),
    services: yup.string().required("Todos os campos são obrigatórios"),
    about: yup.string().required("Todos os campos são obrigatórios"),
  });

  const [sectionForm, setSectionForm] = useState<number>(1);
  const [selectService, setSelectService] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    value && setSelectService(value);
  };

  const cpfMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
          {sectionForm === 1 ? (
            <FormStyled>
              <Input
                label="Nome Completo"
                inputType="text"
                placeholder="Digite seu nome"
                errorMessage=""
                error={false}
                {...register("name")}
              />
              <Input
                label="Email"
                inputType="text"
                placeholder="Digite seu email"
                errorMessage=""
                error={false}
                {...register("email")}
              />
              <WrapperDoubleInput>
                <Input
                  label="CPF"
                  inputType="text"
                  placeholder="Digite seu CPF"
                  errorMessage=""
                  error={false}
                  {...register("cpf")}
                />
                <Input
                  label="Data de nascimento"
                  inputType="date"
                  errorMessage=""
                  error={false}
                  {...register("birthday")}
                />
              </WrapperDoubleInput>
              <WrapperDoubleInput>
                <ContainerSelect>
                  <LabelStyled htmlFor="sexo">Sexo</LabelStyled>
                  <SelectStyled name="sexo" id="sexo">
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                  </SelectStyled>
                </ContainerSelect>
                <Input
                  label="Celular"
                  inputType="text"
                  placeholder="(00) 00000-0000"
                  errorMessage=""
                  error={false}
                />
              </WrapperDoubleInput>

              <Button>Continuar</Button>
            </FormStyled>
          ) : sectionForm === 2 ? (
            <FormStyled>
              <WrapperDoubleInput>
                <Input
                  label="CEP"
                  inputType="text"
                  placeholder="00000-000"
                  errorMessage=""
                  error={false}
                />
                <ContainerSelect>
                  <LabelStyled htmlFor="uf">Estado</LabelStyled>
                  <SelectStyled name="uf" id="uf">
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </SelectStyled>
                </ContainerSelect>
              </WrapperDoubleInput>
              <Input
                label="Endereço"
                inputType="text"
                placeholder="Digite seu endereço completo"
                errorMessage=""
                error={false}
              />
              <WrapperDoubleInput>
                <Input
                  label="Bairro"
                  inputType="text"
                  placeholder="Digite seu bairro"
                  errorMessage=""
                  error={false}
                />

                <Input
                  label="Cidade"
                  inputType="text"
                  placeholder="Digite sua cidade"
                  errorMessage=""
                  error={false}
                />
              </WrapperDoubleInput>

              <Input
                label="Complemento"
                inputType="text"
                placeholder="Apt, bloco..."
                errorMessage=""
                error={false}
              />

              <Button>Continuar</Button>
            </FormStyled>
          ) : (
            <FormStyled>
              <span>Qual o tipo de serviço que você realiza?</span>
              <WrapperInputsRadio>
                <InputRadio
                  name="services"
                  value="Limpeza Residencial"
                  selected={selectService === "Limpeza Residencial"}
                  handleSelectChange={handleSelectChange}
                >
                  Limpeza Residencial
                </InputRadio>
                <InputRadio
                  name="services"
                  value="Passadoria"
                  selected={selectService === "Passadoria"}
                  handleSelectChange={handleSelectChange}
                >
                  Passadoria
                </InputRadio>
                <InputRadio
                  name="services"
                  value="Jardineiro"
                  selected={selectService === "Jardineiro"}
                  handleSelectChange={handleSelectChange}
                >
                  Jardineiro
                </InputRadio>

                <InputRadio
                  name="services"
                  value="Encanador"
                  selected={selectService === "Encanador"}
                  handleSelectChange={handleSelectChange}
                >
                  Encanador
                </InputRadio>
                <InputRadio
                  name="services"
                  value="Eletricista"
                  selected={selectService === "Eletricista"}
                  handleSelectChange={handleSelectChange}
                >
                  Eletricista
                </InputRadio>
                <InputRadio
                  name="services"
                  value="Concertos gerais"
                  selected={selectService === "Concertos gerais"}
                  handleSelectChange={handleSelectChange}
                >
                  Concertos gerais
                </InputRadio>
              </WrapperInputsRadio>
              <ContainerTextArea>
                <LabelStyled>Sobre você</LabelStyled>
                <TextAreaStyled placeholder="Apresente-se para seus clientes"></TextAreaStyled>
              </ContainerTextArea>
              <Button>Cadastrar</Button>
            </FormStyled>
          )}
        </WrapperForm>
      </Container>
    </BackgroundGray>
  );
};

export default ProfessionalRegister;
