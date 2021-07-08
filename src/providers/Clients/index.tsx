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
  editClient: (clientData: ClientLogin) => void;
  token: string;
  setAuth: (value: React.SetStateAction<string>) => void;
  idClient: string;
  setIdClient: (value: React.SetStateAction<string>) => void;
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
      .then((response) => {
        console.log(response.data);
        // history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  //  login de cliente
  const token = localStorage.getItem("token") || "";
  const [auth, setAuth] = useState<string>(token);
  const [idClient, setIdClient] = useState<string>("");
  const clientLogin = (clientData: ClientLogin) => {
    api
      .post("login", clientData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        const decodedToken: DecodeToken = jwt_decode(response.data.accessToken);
        localStorage.setItem("idClient", decodedToken.sub);
        setIdClient(decodedToken.sub);
        setAuth(response.data.accessToken);
        // history.push("/dashboard");
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
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClients = () => useContext(ClientContext);
