import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { notification } from "antd";
import { FaTimesCircle, FaTimes, FaCheckCircle } from "react-icons/fa";
import { PartnerData } from "../../types/partnerData";

// interface Partner {
//   name: string;
//   email: string;
//   cpf: string;
//   birthday: string;
//   gender: string;
//   phone: string;
//   cep: string;
//   uf: string;
//   address: string;
//   bairro: string;
//   city: string;
//   complement?: string;
//   services: string[];
//   about: string;
//   class: string;
// }

interface PartnersContextProps {
  partners: PartnerData[];
  newPartner: (partner: PartnerData) => void;
  editPartner: (partner: PartnerData, id: string, token: string) => void;
}

interface PartnersProviderProps {
  children: ReactNode;
}

const PartnersContext = createContext<PartnersContextProps>(
  {} as PartnersContextProps
);

export const PartnersProvider = ({ children }: PartnersProviderProps) => {
  const [partners, setPartners] = useState<PartnerData[]>([]);
  const history = useHistory();

  const newPartner = (partner: PartnerData) => {
    const partnerNew = {
      ...partner,
      partner: true,
    };
    console.log("ok");
    api
      .post("register", partnerNew)
      .then(() => {
        notification.open({
          message: "Parabéns",
          closeIcon: <FaTimes />,
          description:
            "Você efetuou cadastro como parceiro CleanGo. Faça seu login e aproveite nossa plataforma!",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });

        history.push("/login");
      })
      .catch((_) =>
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          description: "Erro ao realizar cadastro. Tente novamente",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        })
      );
  };

  const editPartner = (partner: PartnerData, id: string, token: string) => {
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
