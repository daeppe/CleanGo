import { createContext, ReactNode, useContext, useState } from "react";
import { ClientData } from "../../types/clientData";
import api from "../../services/api";

interface ClientProviderProps {
  children: ReactNode;
}

interface ClientProviderData {
  newClient: (clientData: ClientData) => void;
  clientLogin: (clientData: ClientLogin) => void;
  token: string;
  setAuth: (value: React.SetStateAction<string>) => void;
}

interface ClientLogin {
  email: string;
  password: string;
}

const ClientContext = createContext<ClientProviderData>(
  {} as ClientProviderData
);

export const ClientProvider = ({ children }: ClientProviderProps) => {
  // registrar cliente

  const newClient = (clientData: ClientData) => {
    console.log(clientData);
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

  const clientLogin = (clientData: ClientLogin) => {
    api
      .post("login", clientData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        setAuth(response.data.accessToken);
        // history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ClientContext.Provider
      value={{ token: auth, setAuth, newClient, clientLogin }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClients = () => useContext(ClientContext);

// setError: Dispatch<SetStateAction<boolean>>,
// history: History
