import { createContext, Dispatch, ReactNode, useContext } from "react";
import { ClientData } from "../../types/clientData";
import api from "../../services/api";
import { History } from "history";
import { useAuth } from "../Auth";

interface ClientProviderProps {
  children: ReactNode;
}
interface EditClient {
  partner?: boolean;
  name?: string;
  email?: string;
  cpf?: string;
  password?: string;
}

interface ClientProviderData {
  newClient: (
    clientData: ClientData,
    setError: Dispatch<boolean>,
    history: History
  ) => void;

  deleteClient: (idClient: number) => void;
  editClient: (clientData: EditClient) => void;

  searchClient: (idClient: number) => void;
}

const ClientContext = createContext<ClientProviderData>(
  {} as ClientProviderData
);

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const { token, idClient } = useAuth();
  // registrar cliente
  const newClient = (
    clientData: ClientData,
    setError: Dispatch<boolean>,
    history: History
  ) => {
    api
      .post("register", clientData)
      .then(() => {
        console.log("Cadastrou novo usuário");
        history.push("/login");
      })
      .catch(() => setError(true));
  };

  const editClient = (clientData: EditClient) => {
    api
      .patch(`users/${idClient}`, clientData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => console.log(response.status))
      .catch((err) => console.log(err));
  };
  const searchClient = (idClient: number) => {
    api
      .get(`users/${idClient}`, {
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
        newClient,
        editClient,
        deleteClient,
        searchClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClients = () => useContext(ClientContext);
