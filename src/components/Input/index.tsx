import {
  InputStyled,
  LabelStyled,
  ContainerInput,
  ErrorMessage,
} from "./styles";

interface InputProps {
  label: string;
  inputType: string;
  errorMessage?: string;
  placeholder?: string;
  error?: boolean;
  onChange?: (param: any) => void;
}

const Input = ({
  label,
  inputType,
  errorMessage,
  placeholder,
  error = false,
  onChange,
}: InputProps) => {
  return (
    <ContainerInput>
      <LabelStyled htmlFor="">{label}</LabelStyled>
      <InputStyled
        type={inputType}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ContainerInput>
  );
};
export default Input;
