import { ReactNode } from "react";
import { ButtonItem } from "./styles";

interface ButtonProps {
  onClickFunc: () => void;
  whiteSchema?: boolean;
  type?: string;
  children: ReactNode;
}

const Button = ({
  onClickFunc,
  whiteSchema = false,
  type,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonItem
      type={type}
      whiteSchema={whiteSchema}
      onClick={onClickFunc}
      {...rest}
    >
      {children}
    </ButtonItem>
  );
};

export default Button;
