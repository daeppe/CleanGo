import { SetStateAction, Dispatch } from "react";
import { ServiceData } from "../../types/ServiceData";
import formatValue from "../../utils/formatedPrice";
import Button from "../Button";
import { useAuth } from "../../providers/Auth";
import { useServices } from "../../providers/Services";
import {
    ContainerInfo,
    ContainerRow,
    CloseIcon,
    ServiceClass,
    Subtitles,
    GeneralInfo,
    Adress,
    ServiceDetails,
    CustomModal,
} from "./styles";
import { useState } from "react";
interface ModalProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    service: ServiceData;
}
const ModalAvailableService = ({
    service,
    visible,
    setVisible,
}: ModalProps) => {
    const { user } = useAuth();
    const { acceptService } = useServices();
    const [error, setError] = useState<boolean>(false);

    const handleAccept = () => {
        acceptService(
            {
                opened: false,
                partner_id: user?.id,
                serviceId: service?.id,
            },
            setError
        );
        setVisible(!visible);
    };

    return (
        <CustomModal
            visible={visible}
            centered
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}
            closeIcon={<CloseIcon />}
            width={600}
            title="Serviço disponível"
            okText="Criar"
            cancelText="Cancelar"
        >
            <ContainerInfo>
                <ServiceClass>{service?.service_details?.class}</ServiceClass>
                {service?.service_details?.class.toLowerCase() !==
                    "passadoria" && (
                    <>
                        <Subtitles>Detalhes:</Subtitles>
                        <ServiceDetails>
                            <li>
                                {service?.service_details?.bedrooms} quartos
                            </li>
                            <li>
                                {service?.service_details?.bathrooms} banheiros
                            </li>
                        </ServiceDetails>
                    </>
                )}
                {error && ""}
                <Subtitles>Endereço:</Subtitles>
                <Adress>{`${service?.address?.place}, ${
                    service?.address?.number
                } ${
                    service?.address?.complements &&
                    service?.address?.complements
                } - ${service?.address?.neighborhood},  ${
                    service?.address?.city
                } - ${service?.address?.state}, ${
                    service?.address?.cep
                }`}</Adress>
                <Subtitles>Contratante:</Subtitles>
                <GeneralInfo>{service.customer}</GeneralInfo>
                <Subtitles>Data:</Subtitles>
                <GeneralInfo>{service?.date.replaceAll("-", "/")}</GeneralInfo>
                <ContainerRow>
                    <ContainerInfo>
                        <Subtitles>Duração total:</Subtitles>
                        <GeneralInfo className="hours">
                            {service?.service_details?.hours} horas
                        </GeneralInfo>
                    </ContainerInfo>
                    <ContainerInfo>
                        <Subtitles>Valor</Subtitles>
                        <GeneralInfo className="price">
                            {formatValue(service?.price)}
                        </GeneralInfo>
                    </ContainerInfo>
                    <Button onClickFunc={handleAccept}>Aceitar</Button>
                </ContainerRow>
                <Button onClickFunc={handleAccept}>Aceitar</Button>
            </ContainerInfo>
        </CustomModal>
    );
};
export default ModalAvailableService;
