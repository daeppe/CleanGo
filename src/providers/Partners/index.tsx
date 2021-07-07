import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

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
}

interface PartnersProviderProps {
  children: ReactNode;
}

const PartnersContext = createContext<PartnersContextProps>(
  {} as PartnersContextProps
);

export const PartnersProvider = ({ children }: PartnersProviderProps) => {
  const [partners, setPartners] = useState<Partner[]>([]);

  const newPartner = (partner: Partner) => {};

  return (
    <PartnersContext.Provider value={{ partners }}>
      {children}
    </PartnersContext.Provider>
  );
};

export const usePartners = () => useContext(PartnersContext);
