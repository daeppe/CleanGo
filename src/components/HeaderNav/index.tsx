import React from "react";
import { useLocation } from "react-router-dom";
import { BtnLink, Container, Links } from "./styles";

interface HeaderNavProps {
  whiteSchema?: boolean;
}
const HeaderNav = ({ whiteSchema = false }: HeaderNavProps) => {
  const location = useLocation();
  return (
    <Container>
      {console.log(location.pathname)}
      <Links to="/sejaumparceiro" whiteSchema={whiteSchema}>
        Trabalhe com a CleanGo
      </Links>
      <Links to="/login" whiteSchema={whiteSchema}>
        Login
      </Links>

      <BtnLink
        to={
          location.pathname === "/sejaumparceiro"
            ? "/cadastroparceiro"
            : "/cadastro"
        }
        whiteSchema={whiteSchema}
      >
        Cadastro
      </BtnLink>
    </Container>
  );
};

export default HeaderNav;
