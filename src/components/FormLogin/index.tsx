import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Input from "../Input";
import { ContainerForm } from "./styles";
import Button from "../Button";
import { useAuth } from "../../providers/Auth";

interface FormValues {
  email: string;
  password: string;
}

function FormLogin() {
  const { clientLogin } = useAuth();
  const [error, setError] = useState<boolean>(false);
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
    clientLogin(data, setError, history);
  };

  return (
    <ContainerForm>
      <h2>Faça seu login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputType="email"
          label="Email"
          {...register("email")}
          placeholder="Digite seu email"
          error={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <Input
          inputType="password"
          label="Senha"
          {...register("password")}
          placeholder="Digite sua senha"
          error={!!errors.password}
          errorMessage={errors.password?.message}
        />
        <p>
          Ainda não possui cadastro?{" "}
          <Link id="link" to="/cadastro">
            Clique aqui
          </Link>{" "}
          para se cadastrar.
        </p>
        <div className="containerButton">
          <Button type="submit" whiteSchema={false}>
            ENTRAR
          </Button>
        </div>
      </form>
    </ContainerForm>
  );
}
export default FormLogin;
