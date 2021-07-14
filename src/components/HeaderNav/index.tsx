import React from "react";
import { BtnLink, Container, Links } from "./styles";

const HeaderNav = () => {
  return (
    <Container>
      <Links to="/sejaumparceiro">Trabalhe com a CleanGo</Links>
      <Links to="/login">Login</Links>
      <BtnLink to="/cadastro">Cadastro</BtnLink>
    </Container>
  );
};

export default HeaderNav;
