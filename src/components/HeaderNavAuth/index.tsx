import React from "react";
import { Container, Links } from "./styles";
import { IoExitOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { FaCog } from "react-icons/fa";
interface HeaderNavAuthProps {
  name: string;
}

const HeaderNavAuth = ({ name }: HeaderNavAuthProps) => {
  const history = useHistory();
  const { userLogoff, user } = useAuth();

  return (
    <Container>
      <p>{`Olá, ${user?.name}`}</p>
      <Links
        onClick={() =>
          user?.partner
            ? history.push("/dashboardparceiro/configuracoes")
            : history.push("/dashboardcliente/configuracoes")
        }
      >
        <FaCog className="config" />
      </Links>
      <Links onClick={() => userLogoff(history)}>
        <IoExitOutline />
      </Links>
    </Container>
  );
};

export default HeaderNavAuth;
