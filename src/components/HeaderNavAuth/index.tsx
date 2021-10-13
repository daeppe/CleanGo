import React from "react";
import { Container, Links } from "./styles";
import { IoExitOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { FaCog } from "react-icons/fa";

const HeaderNavAuth = () => {
  const history = useHistory();
  const { userLogoff, user } = useAuth();

  return (
    <Container>
      <p>{`Olá, ${user?.full_name}`}</p>
      {user?.partner && (
        <Links onClick={() => history.push("/dashboardparceiro/configuracoes")}>
          <FaCog className="config" />
        </Links>
      )}
      <Links onClick={() => userLogoff(history)}>
        <IoExitOutline />
      </Links>
    </Container>
  );
};

export default HeaderNavAuth;
