import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";
import { UserData } from "../../types/UserData";
import { History } from "history";
import api from "../../services/api";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterProviderData {
  userRegister: (
    userData: UserData,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => void;
}

const RegisterContext = createContext<RegisterProviderData>(
  {} as RegisterProviderData
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const userRegister = (
    userData: UserData,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => {
    api
      .post("register", userData)
      .then((_) => {
        history.push("/login");
      })
      .catch((_) => setError(true));
  };

  return (
    <RegisterContext.Provider value={{ userRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
