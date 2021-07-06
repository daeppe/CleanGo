import React, { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

const BackgroundGray = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default BackgroundGray;
