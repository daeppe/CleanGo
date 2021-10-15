import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useState,
} from "react";
import api from "../../services/api";
import { notification } from "antd";
import { FaTimesCircle, FaTimes, FaCheckCircle } from "react-icons/fa";
import { PartnerData } from "../../types/partnerData";
import { History } from "history";
import { AxiosError, AxiosResponse } from "axios";

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
    newPartner: (
        partner: PartnerData,
        history: History,
        setLoad: Dispatch<boolean>
    ) => void;
    editPartner: (partner: PartnerData, id: number, token: string) => void;
    getPartner: (partnerId: number, token: string) => void;
    partner: PartnerData;
}

interface PartnersProviderProps {
    children: ReactNode;
}

const PartnersContext = createContext<PartnersContextProps>(
    {} as PartnersContextProps
);

export const PartnersProvider = ({ children }: PartnersProviderProps) => {
    const [partner, setPartner] = useState<PartnerData>({} as PartnerData);
    const newPartner = (
        partner: PartnerData,
        history: History,
        setLoad: Dispatch<boolean>
    ) => {
        const partnerNew = {
            full_name: partner.full_name,
            email: partner.email,
            password: partner.password,
            gender: partner.gender?.split("")[0].toUpperCase(),
            birthday: partner.birthday,
            cpf: partner.cpf,
            phone: partner.phone,
            address: {
                place: partner.address,
                neighborhood: partner.district,
                complements: partner.complement,
                city: partner.city,
                state: partner.uf,
                cep: partner.cep?.replace("-", ""),
                number: partner.number,
            },
            services: partner.service,
            describe: partner.about,
        };
        api.post("partners", partnerNew)
            .then(() => {
                notification.open({
                    message: "Parabéns",
                    closeIcon: <FaTimes />,
                    description:
                        "Você efetuou cadastro como parceiro CleanGo. Faça seu login e aproveite nossa plataforma!",
                    icon: <FaCheckCircle style={{ color: "green" }} />,
                });
                setLoad(false);
                history.push("/login");
            })
            .catch((error: AxiosError) => {
                setLoad(false);

                notification.open({
                    message: "Erro.",
                    closeIcon: <FaTimes />,
                    description: `Erro ao realizar cadastro. ${error.response?.data}`,
                    icon: <FaTimesCircle style={{ color: "red" }} />,
                });
            });
    };

    const editPartner = (partner: PartnerData, id: number, token: string) => {
        api.patch(`partners/${id}`, partner, {
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
    const getPartner = (partnerId: number = 1, token: string) => {
        api.get<PartnerData>(`partners/${partnerId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response: AxiosResponse) => setPartner(response.data));
    };
    return (
        <PartnersContext.Provider
            value={{ newPartner, editPartner, getPartner, partner }}
        >
            {children}
        </PartnersContext.Provider>
    );
};

export const usePartners = () => useContext(PartnersContext);
