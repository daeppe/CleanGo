import React from "react";
import { Container, Links } from "./styles";
import { IoExitOutline } from "react-icons/io5";

interface HeaderNavAuthProps {
  name: string;
}

const HeaderNavAuth = ({ name }: HeaderNavAuthProps) => {
  return (
    <Container>
      <span>{name}</span>
      <Links to="/professionalregister">
        <IoExitOutline />
      </Links>
    </Container>
  );
};

export default HeaderNavAuth;
