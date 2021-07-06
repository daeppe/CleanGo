import { ReactNode } from "react";
import { ButtonItem } from "./styles";

interface ButtonProps {
  onClickFunc: () => void;
  whiteSchema?: boolean;
  children: ReactNode;
}

const Button = ({
  onClickFunc,
  whiteSchema = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonItem whiteSchema={whiteSchema} onClick={onClickFunc} {...rest}>
      {children}
    </ButtonItem>
  );
};

export default Button;
