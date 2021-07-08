import { createContext, ReactNode, useContext, useState } from "react";
import { ClientData } from "../../types/clientData";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

interface ClientProviderProps {
  children: ReactNode;
}

interface ClientProviderData {
  newClient: (clientData: ClientData) => void;
  clientLogin: (clientData: ClientLogin) => void;
  deleteClient: (idClient: number) => void;
  editClient: (clientData: ClientLogin) => void;
  token: string;
  setAuth: (value: React.SetStateAction<string>) => void;
  idClient: number;
  setIdClient: (value: React.SetStateAction<number>) => void;
}

interface ClientLogin {
  email: string;
  password: string;
}
interface EditClient {
  partner?: boolean;
  name?: string;
  email?: string;
  cpf?: string;
  password?: string;
}
interface DecodeToken {
  sub: string;
  iat: number;
  email: string;
  exp: number;
}

const ClientContext = createContext<ClientProviderData>(
  {} as ClientProviderData
);

export const ClientProvider = ({ children }: ClientProviderProps) => {
  // registrar cliente

  const newClient = (clientData: ClientData) => {
    api
      .post("register", clientData)
      .then(() => {
        console.log("Cadastrou novo usuário");
      })
      .catch((err) => console.log(err));
  };

  const convertStringToNumber = (str: string): number => {
    return parseInt(str);
  };
  //  login de cliente
  const token = localStorage.getItem("token") || "";
  const [auth, setAuth] = useState<string>(token);
  const [idClient, setIdClient] = useState<number>(0);
  const clientLogin = (clientData: ClientLogin) => {
    api
      .post("login", clientData)
      .then((response) => {
        console.log("Entrou na aplicação");
        localStorage.setItem("token", response.data.accessToken);
        const decodedToken: DecodeToken = jwt_decode(response.data.accessToken);
        localStorage.setItem("idClient", decodedToken.sub);
        setIdClient(convertStringToNumber(decodedToken.sub));
        setAuth(response.data.accessToken);
      })
      .catch((err) => console.log(err));
  };

  const editClient = (clientData: EditClient) => {
    api
      .patch(`users/${idClient}`, clientData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const deleteClient = (idClient: number) => {
    api
      .delete(`users/${idClient}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => console.log(response.status))
      .catch((err) => console.log(err));
  };

  return (
    <ClientContext.Provider
      value={{
        token: auth,
        setAuth,
        newClient,
        clientLogin,
        editClient,
        idClient,
        setIdClient,
        deleteClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClients = () => useContext(ClientContext);
