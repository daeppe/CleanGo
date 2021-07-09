import React from "react";
import { BtnLink, Container, Links } from "./styles";

const HeaderNav = () => {
  return (
    <Container>
      <Links to="/professionalregister">Trabalhe com a CleanGo</Links>
      <Links to="/login">Login</Links>
      <BtnLink to="/service">Solicite um serviço</BtnLink>
    </Container>
  );
};

export default HeaderNav;
