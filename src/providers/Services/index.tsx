import { History } from "history";
import api from "../../services/api";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
} from "react";
import {
    ServiceData,
    AcceptService,
    ServiceDataBE,
    AcceptServiceBE,
} from "../../types/ServiceData";
import { useState } from "react";
import { useAuth } from "../Auth";
import { AxiosError, AxiosResponse } from "axios";
import { notification } from "antd";
import { FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";

interface ServicesProviderProps {
    children: ReactNode;
}
interface ServicesProviderData {
    newService: (
        serviceData: ServiceData,
        setError: Dispatch<SetStateAction<boolean>>,
        history: History
    ) => void;
    acceptService: (
        data: AcceptService,
        setError: Dispatch<SetStateAction<boolean>>
    ) => void;
    token?: string;
    finishService: (
        completed: boolean,
        setError: Dispatch<SetStateAction<boolean>>,
        serviceId?: number,
        setVisible?: Dispatch<SetStateAction<boolean>>
    ) => void;
    deleteService: (
        setError: Dispatch<SetStateAction<boolean>>,
        serviceId?: number,
        setVisible?: Dispatch<SetStateAction<boolean>>
    ) => void;
    getServices: (
        setError: Dispatch<SetStateAction<boolean>>,
        page?: number,
        limit?: number
    ) => void;
    getServicesAccepted: (
        setError: Dispatch<SetStateAction<boolean>>,
        partnerId?: number
    ) => void;
    getClientServices: (
        setError: Dispatch<SetStateAction<boolean>>,
        completed: string,
        userId?: number
    ) => void;
    getOpenServices: (
        setError: Dispatch<SetStateAction<boolean>>,
        userId?: number
    ) => void;
    services: ServiceData[];
    servicesAccept: ServiceData[];
    clientServices: ServiceData[];
    setServices: Dispatch<SetStateAction<ServiceData[]>>;
    filterOpenServices: (filter: string, userId?: number) => void;
    filterServices: (filter: string) => void;
    filteredServices: ServiceData[];
    filteredOpenServices: ServiceData[];
    servicesOpen: ServiceData[];
    servicesProgress: ServiceData[];
    getServicesPaginated: (pageNumber: number, limit?: number) => void;
}
export const ServicesContext = createContext<ServicesProviderData>(
    {} as ServicesProviderData
);

export const ServiceProvider = ({ children }: ServicesProviderProps) => {
    const { token, user } = useAuth();
    const [services, setServices] = useState<ServiceData[]>([]);
    const [filteredServices, setFilteredServices] = useState<ServiceData[]>([]);
    const [filteredOpenServices, setFilteredOpenServices] = useState<
        ServiceData[]
    >([]);
    const [servicesAccept, setServicesAccept] = useState<ServiceData[]>([]);
    const [clientServices, setClientServices] = useState<ServiceData[]>([]);
    const [servicesOpen, setOpenServices] = useState<ServiceData[]>([]);
    const [servicesProgress, setServicesProgress] = useState<ServiceData[]>([]);
    const newService = (
        serviceData: ServiceData,
        setError: Dispatch<SetStateAction<boolean>>,
        history: History
    ) => {
        const { hours, bedrooms, bathrooms, type } =
            serviceData.service_details;
        const { place, number, complements, cep, state, neighborhood, city } =
            serviceData.address;
        const serviceDataFormated: ServiceDataBE = {
            address: {
                place,
                number,
                complements,
                cep: cep.replaceAll("-", ""),
                state,
                neighborhood,
                city,
            },
            date: serviceData.date,
            hours,
            value: serviceData.price,
            service: serviceData.service_details.class,
            residence: type,
            bathrooms,
            bedrooms,
            opened: true,
            completed: false,
        };
        console.log(serviceDataFormated);
        api.post("orders", serviceDataFormated, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => {
                getServices(setError);
                notification.open({
                    message: "Sucesso",
                    closeIcon: <FaTimes />,
                    style: {
                        WebkitBorderRadius: 4,
                    },
                    description:
                        "Pedido de serviço concluído! Acompanhe detalhes na págine de serviços.",
                    icon: <FaCheckCircle style={{ color: "green" }} />,
                });

                history.push("/dashboardcliente/servicos");
            })
            .catch((err) => setError(true));
    };
    const acceptService = (
        data: AcceptService,
        setError: Dispatch<SetStateAction<boolean>>
    ) => {
        const dataF: AcceptServiceBE = {
            partner_id: data.partnerId,
            opened: data.opened,
        };
        api.patch(`orders/${data.serviceId}`, dataF, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                getServicesAccepted(setError, user?.id);
                getServices(setError);
                getClientServices(setError, "false", response.data.userId);
                notification.open({
                    message: "Sucesso",
                    closeIcon: <FaTimes />,
                    style: {
                        WebkitBorderRadius: 4,
                    },
                    description: "Serviço aceito",
                    icon: <FaCheckCircle style={{ color: "green" }} />,
                });
            })
            .catch(() => setError(true));
    };

    const finishService = (
        completed: boolean,
        setError: Dispatch<SetStateAction<boolean>>,
        serviceId?: number,
        setVisible?: Dispatch<SetStateAction<boolean>>
    ) => {
        api.patch(
            `orders/${serviceId}`,
            { completed },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
            .then(() => {
                getClientServices(setError, "false", user?.id);
                notification.open({
                    message: "Sucesso",
                    closeIcon: <FaTimes />,
                    style: {
                        WebkitBorderRadius: 4,
                    },
                    description: "Serviço finalizado",
                    icon: <FaCheckCircle style={{ color: "green" }} />,
                });
            })
            .catch((err: AxiosError) => {
                notification.open({
                    message: "Erro.",
                    closeIcon: <FaTimes />,
                    description: `Erro ao tentar concluir serviço. ${err.response?.data}`,
                    icon: <FaTimesCircle style={{ color: "red" }} />,
                });

                setVisible && setVisible(false);
            });
    };
    const deleteService = (
        setError: Dispatch<SetStateAction<boolean>>,
        serviceId?: number,
        setVisible?: Dispatch<SetStateAction<boolean>>
    ) => {
        api.delete(`orders/${serviceId}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => {
                getOpenServices(setError, user?.id);
                notification.open({
                    message: "Sucesso",
                    closeIcon: <FaTimes />,
                    style: {
                        WebkitBorderRadius: 4,
                    },
                    description: "Serviço deletado",
                    icon: <FaCheckCircle style={{ color: "green" }} />,
                });
            })
            .catch((err: AxiosError) => {
                notification.open({
                    message: "Erro.",
                    closeIcon: <FaTimes />,
                    description: `Erro ao tentar excluir o serviço. ${err.response?.data}`,
                    icon: <FaTimesCircle style={{ color: "red" }} />,
                });

                setVisible && setVisible(false);
            });
    };
    const getServices = (
        setError: Dispatch<SetStateAction<boolean>>,
        page?: number,
        limit?: number
    ) => {
        page && limit
            ? api
                  .get<ServiceData[]>(
                      `orders?opened=true&_page=${page}&_limit=${limit}`,
                      {
                          headers: { Authorization: `Bearer ${token}` },
                      }
                  )
                  .then((response) => setServices(response.data))
                  .catch((err) => setError(true))
            : api
                  .get<ServiceData[]>(`orders?opened=true`, {
                      headers: { Authorization: `Bearer ${token}` },
                  })
                  .then((response) => setServices(response.data))
                  .catch((err) => setError(true));
    };

    const getServicesAccepted = (
        setError: Dispatch<SetStateAction<boolean>>,
        partnerId: number = 0
    ) => {
        if (partnerId === 0) {
            return setError(true);
        }

        api.get<ServiceData[]>(`orders?partnerId=${partnerId}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response: AxiosResponse) =>
                setServicesAccept([...response.data])
            )
            .catch(() => setError(true));
    };

    const getClientServices = (
        setError: Dispatch<SetStateAction<boolean>>,
        completed: string,
        userId: number = 0
    ) => {
        if (userId === 0) {
            return setError(true);
        }
        completed === "true"
            ? api
                  .get<ServiceData[]>(
                      `orders?userId=${userId}&completed=${completed}`,
                      {
                          headers: { Authorization: `Bearer ${token}` },
                      }
                  )
                  .then((response: AxiosResponse) =>
                      setClientServices([...response.data])
                  )
                  .catch(() => setError(true))
            : api
                  .get<ServiceData[]>(
                      `orders?userId=${userId}&opened=false&completed=${completed}`,
                      {
                          headers: { Authorization: `Bearer ${token}` },
                      }
                  )
                  .then((response: AxiosResponse) =>
                      setServicesProgress([...response.data])
                  )
                  .catch(() => setError(true));
    };

    const getOpenServices = (
        setError: Dispatch<SetStateAction<boolean>>,
        userId: number = 0
    ) => {
        if (userId === 0) {
            return setError(true);
        }
        api.get<ServiceData[]>(
            `orders?userId=${userId}&completed=false&opened=true`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
            .then((response: AxiosResponse) =>
                setOpenServices([...response.data])
            )
            .catch(() => setError(true));
    };

    const filterServices = (filter: string) => {
        api.get<ServiceData[]>(`orders?service_name=${filter}&opened=true`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => setFilteredServices(response.data))
            .catch((err: AxiosError) => {
                notification.open({
                    message: "Erro.",
                    closeIcon: <FaTimes />,
                    description: `Verifique sua conexão. ${err.response?.data}`,
                    icon: <FaTimesCircle style={{ color: "red" }} />,
                });
            });
    };
    const filterOpenServices = (filter: string, userId?: number) => {
        api.get<ServiceData[]>(
            `orders?service_name=${filter}&userId=${userId}&completed=false`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
            .then((response: AxiosResponse) =>
                setFilteredOpenServices(response.data)
            )
            .catch((err: AxiosError) => {
                notification.open({
                    message: "Erro.",
                    closeIcon: <FaTimes />,
                    description: `Verifique sua conexão. ${err.response?.data}`,
                    icon: <FaTimesCircle style={{ color: "red" }} />,
                });
            });
    };

    const getServicesPaginated = (pageNumber: number, limit?: number) => {
        api.get<ServiceData[]>(`orders?_page=${pageNumber}&_limit=${limit}`)
            .then((response: AxiosResponse) => setServices(response.data))
            .catch((err: AxiosError) => {
                notification.open({
                    message: "Erro.",
                    closeIcon: <FaTimes />,
                    description: `Verifique sua conexão. ${err.response?.data}`,
                    icon: <FaTimesCircle style={{ color: "red" }} />,
                });
            });
    };
    return (
        <ServicesContext.Provider
            value={{
                servicesProgress,
                servicesOpen,
                getOpenServices,
                filterOpenServices,
                getServices,
                acceptService,
                deleteService,
                finishService,
                newService,
                services,
                servicesAccept,
                clientServices,
                setServices,
                getServicesAccepted,
                getClientServices,
                filterServices,
                filteredServices,
                filteredOpenServices,
                getServicesPaginated,
            }}
        >
            {children}
        </ServicesContext.Provider>
    );
};
export const useServices = () => useContext(ServicesContext);
