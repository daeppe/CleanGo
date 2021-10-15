import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useState,
} from "react";
import { History } from "history";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
import { PartnerData } from "../../types/partnerData";
import { ClientData } from "../../types/clientData";
import { notification } from "antd";
import { FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";
import { AxiosError, AxiosResponse } from "axios";
import internal from "stream";

interface AuthProviderProps {
    children: ReactNode;
}

interface ClientLogin {
    email: string;
    password: string;
}

interface AuthProviderData {
    userLogin: (
        clientData: ClientLogin,
        setLoad: Dispatch<boolean>,
        radioButton: String,
        history: History
    ) => void;
    userLogoff: (history: History) => void;
    token: string;
    setAuth: (value: React.SetStateAction<string>) => void;
    idClient: number;
    setIdClient: (value: React.SetStateAction<number>) => void;
    user?: PartnerData | ClientData;
}

interface DecodeToken {
    sub: {
        id: number;
        email: string;
        full_name: string;
        is_partner: boolean;
    };
    iat: number;
    email: string;
    exp: number;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const convertStringToNumber = (str: string): number => {
        return parseInt(str);
    };

    //  login de cliente
    const [auth, setAuth] = useState<string>(() => {
        let token = localStorage.getItem("@CleanGo/token");

        if (token) {
            return JSON.parse(token);
        }
        return "";
    });
    const [user, setUser] = useState<PartnerData | ClientData>(() => {
        let userStorage = localStorage.getItem("@CleanGo/user");

        if (userStorage) {
            return JSON.parse(userStorage);
        }
        return {} as PartnerData | ClientData;
    });

    const [idClient, setIdClient] = useState<number>(0);

    const userLogin = (
        clientData: ClientLogin,
        setLoad: Dispatch<boolean>,
        radioButton: String,
        history: History
    ) => {
        const loginURL =
            radioButton === "Partner" ? "partners/login" : "customers/login";

        api.post(loginURL, clientData)
            .then((response: AxiosResponse) => {
                localStorage.setItem(
                    "@CleanGo/token",
                    JSON.stringify(response.data.auth_token)
                );
                const decodedToken: DecodeToken = jwt_decode(
                    response.data.auth_token
                );
                localStorage.setItem(
                    "@CleanGo/idClient",
                    JSON.stringify(decodedToken.sub.id)
                );
                localStorage.setItem(
                    "@CleanGo/user",
                    JSON.stringify(decodedToken.sub)
                );
                setIdClient(decodedToken.sub.id);

                setAuth(response.data.auth_token);
                setLoad(false);
                if (decodedToken.sub.is_partner) {
                    history.push("/dashboardparceiro");
                } else {
                    history.push("/dashboardcliente");
                }
                setUser(decodedToken.sub);
            })
            .catch((err: AxiosError) => {
                setLoad(false);

                notification.open({
                    message: "Erro",
                    closeIcon: <FaTimes />,
                    style: {
                        WebkitBorderRadius: 4,
                    },
                    description:
                        "Erro no login. Verifique seu email e senha, tente novamente.",
                    icon: <FaTimesCircle style={{ color: "red" }} />,
                });
            });
    };

    const userLogoff = (history: History) => {
        setUser({});
        setAuth("");
        setIdClient(0);
        localStorage.clear();
        history.push("/");
    };

    return (
        <AuthContext.Provider
            value={{
                token: auth,
                setAuth,
                userLogin,
                idClient,
                setIdClient,
                user,
                userLogoff,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
