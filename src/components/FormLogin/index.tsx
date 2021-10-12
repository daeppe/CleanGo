import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Input from "../Input";
import { ContainerForm, RadioWrapper } from "./styles";
import Button from "../Button";
import { useAuth } from "../../providers/Auth";
import { FaSpinner } from "react-icons/fa";
import InputRadio from '../InputRadio'

interface FormValues {
  email: string;
  password: string;
}

function FormLogin() {
  const { userLogin } = useAuth();
  const [load, setLoad] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<String>('Partner');

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data: FormValues) => {
    setLoad(true);
    userLogin(data, setLoad, radioValue, history);
  };

  return (
    <ContainerForm load={load}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Faça seu login</h2>
        </div>
        <div>
          <Input
            inputType="email"
            label="Email"
            {...register("email")}
            placeholder="Digite seu email"
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />
        </div>
        <div>
          <Input
            inputType="password"
            label="Senha"
            {...register("password")}
            placeholder="Digite sua senha"
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </div>
        <div>
          <p>
            Ainda não possui cadastro?{" "}
            <Link id="link" to="/cadastro">
              Clique aqui
            </Link>{" "}
            para se cadastrar.
          </p>
        </div>
        <div className="containerButton">
          <Button type="submit" whiteSchema={false}>
            <span>ENTRAR</span>
            <FaSpinner />
          </Button>
        </div>
      </form>
          <h3>Desejo logar como:</h3>
          <RadioWrapper className='radio-wrapper'>
          <InputRadio
            name="service"
            value="Customer"
            selected={radioValue === "Customer"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRadioValue(e.target.value)
            }
          >
            Empregador
          </InputRadio>
          <InputRadio
            name="service"
            value="Partner"
            selected={radioValue === "Partner"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRadioValue(e.target.value)
            }
          >
            Parceiro
          </InputRadio> 
        </RadioWrapper>
    </ContainerForm>
  );
}
export default FormLogin;
