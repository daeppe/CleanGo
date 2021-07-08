import { History } from "history";
import api from "../../services/api";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";
import { ServiceData, AcceptService } from "../../types/ServiceData";
import { useState } from "react";
interface ServicesProviderProps {
  children: ReactNode;
}
interface ServicesProviderData {
  newService: (
    serviceData: ServiceData,
    setError: Dispatch<SetStateAction<boolean>>
  ) => void;
  acceptService: (
    data: AcceptService,
    setError: Dispatch<SetStateAction<boolean>>
  ) => void;
  token?: string;
  finishService: (
    completed: boolean,
    serviceId: number,
    setError: Dispatch<SetStateAction<boolean>>
  ) => void;
  deleteService: (
    serviceId: number,
    history: History,
    setError: Dispatch<SetStateAction<boolean>>
  ) => void;
  getServices: (setError: Dispatch<SetStateAction<boolean>>) => void;
  services: ServiceData[];
  setServices: Dispatch<SetStateAction<ServiceData[]>>;
}
export const ServicesContext = createContext<ServicesProviderData>(
  {} as ServicesProviderData
);

export const ServiceProvider = ({ children }: ServicesProviderProps) => {
  const token = ""; // pegar do provider token
  const [services, setServices] = useState<ServiceData[]>([]);
  setServices([
    ...services,
    {
      userId: 2,
      date: "01010100",
      price: 200.0,
      serviceDetails: {
        hours: 2,
        class: "passadoria",
      },
      opened: true,
      completed: false,
      partnerId: 0,
    },
  ]);
  const newService = (
    serviceData: ServiceData,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .post("services", serviceData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => getServices(setError))
      .catch((err) => setError(true));
  };
  const acceptService = (
    data: AcceptService,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .patch(`services/${data.serviceId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => getServices(setError))
      .catch((err) => setError(true));
  };
  const finishService = (
    completed: boolean,
    serviceId: number,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .patch(
        `services/${serviceId}`,
        { completed },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((err) => setError(true));
  };
  const deleteService = (
    serviceId: number,
    history: History,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .delete(`services/${serviceId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => history.push("/dashboard"))
      .catch((err) => setError(true));
  };
  const getServices = (setError: Dispatch<SetStateAction<boolean>>) => {
    api
      .get<ServiceData[]>("services", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setServices(response.data))
      .catch((err) => setError(true));
  };
  return (
    <ServicesContext.Provider
      value={{
        getServices,
        acceptService,
        deleteService,
        finishService,
        newService,
        services,
        setServices,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
export const useServices = () => useContext(ServicesContext);
