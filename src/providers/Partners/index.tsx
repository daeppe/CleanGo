import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { notification } from "antd";
import { FaTimesCircle, FaTimes, FaCheckCircle } from "react-icons/fa";

interface Partner {
  name: string;
  email: string;
  cpf: string;
  birthday: string;
  gender: string;
  phone: string;
  cep: string;
  uf: string;
  address: string;
  bairro: string;
  city: string;
  complement?: string;
  services: string[];
  about: string;
  class: string;
}

interface PartnersContextProps {
  partners: Partner[];
  newPartner: (partner: Partner) => void;
  editPartner: (partner: Partner, id: string, token: string) => void;
}

interface PartnersProviderProps {
  children: ReactNode;
}

const PartnersContext = createContext<PartnersContextProps>(
  {} as PartnersContextProps
);

export const PartnersProvider = ({ children }: PartnersProviderProps) => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const history = useHistory();

  const newPartner = (partner: Partner) => {
    api
      .post("register/", partner)
      .then((_) => {
        history.push("/login");
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Roboto",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 4,
          },
          description: "Usuário criado.",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });
      })
      .catch((_) =>
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Roboto",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 4,
          },
          description: "Erro ao realizar cadastro.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        })
      );
  };

  const editPartner = (partner: Partner, id: string, token: string) => {
    api
      .patch(`users/${id}`, partner, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Roboto",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 4,
          },
          description: "Dados atualizados",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });
      })
      .catch((_) =>
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Roboto",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 4,
          },
          description: "Erro ao atualizar informações.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        })
      );
  };

  return (
    <PartnersContext.Provider value={{ partners, newPartner, editPartner }}>
      {children}
    </PartnersContext.Provider>
  );
};

export const usePartners = () => useContext(PartnersContext);
