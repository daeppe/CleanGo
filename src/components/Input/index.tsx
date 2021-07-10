import React, { forwardRef } from "react";

import {
  InputStyled,
  LabelStyled,
  ContainerInput,
  ErrorMessage,
} from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputType: string;
  errorMessage?: string;
  error?: boolean;
}

const Input = ({
  label,
  inputType = "text",
  errorMessage,
  placeholder,
  error = false,
  ...rest
}: InputProps) => {
  return (
    <ContainerInput>
      {label && <LabelStyled htmlFor="">{label}</LabelStyled>}
      <InputStyled
        type={inputType}
        placeholder={placeholder}
        {...rest}
        error={error}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ContainerInput>
  );
};

export default forwardRef(Input);
