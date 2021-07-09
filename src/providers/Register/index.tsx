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
import { useState } from "react";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterProviderData {
  userRegister: (
    userData: UserData,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => void;
  backgroundGray: boolean;
  handleBackground: (condition: boolean) => void;
}

const RegisterContext = createContext<RegisterProviderData>(
  {} as RegisterProviderData
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const [backgroundGray, setBackgroundGray] = useState(false);

  const handleBackground = (condition: boolean) => {
    setBackgroundGray(condition);
  };

  const userRegister = (
    userData: UserData,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => {
    api
      .post("register", userData)
      .then(() => {
        history.push("/login");
      })
      .catch(() => setError(true));
  };

  return (
    <RegisterContext.Provider
      value={{ userRegister, handleBackground, backgroundGray }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
