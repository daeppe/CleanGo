import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { ContainerForm } from "./styles";
interface FormValues {
  email: string;
  password: string;
}

export default function FormLogin() {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
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

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <ContainerForm>
      <h2>Faça seu login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputType="text"
          label="Email"
          {...register("email")}
          placeholder="Digite seu email"
          error={!errors?.email}
          errorMessage={errors.email?.message}
        />
        <Input
          inputType="password"
          label="Senha"
          {...register("password")}
          placeholder="Digite sua senha"
          error={!errors?.password}
          errorMessage={errors.password?.message}
        />
        <p>
          Ainda não possui cadastro? <Link to="/">Clique aqui</Link> para se
          cadastrar.
        </p>
        <Button whiteSchema={false}>ENTRAR</Button>
      </form>
    </ContainerForm>
  );
}
