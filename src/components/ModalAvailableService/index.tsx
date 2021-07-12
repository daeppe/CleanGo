import { Modal } from "antd";
import { SetStateAction, Dispatch } from "react";
import { ServiceData } from "../../types/ServiceData";
import formatValue from "../../utils/formatedPrice";
import Button from "../Button";
import { useAuth } from "../../providers/Auth";
import { useServices } from "../../providers/Services";
import { notification } from "antd";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import {
  ContainerInfo,
  ContainerRow,
  CloseIcon,
  TitleModal,
  ServiceClass,
  Subtitles,
  GeneralInfo,
  Adress,
  ServiceDetails,
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
        partnerId: user?.id,
        serviceId: service?.id,
      },
      setError
    );
    setVisible(!visible);
    notification.open({
      message: "Sucesso",
      closeIcon: <FaTimes />,
      style: {
        WebkitBorderRadius: 4,
      },
      description: "Serviço aceito",
      icon: <FaCheckCircle style={{ color: "green" }} />,
    });
  };

  return (
    <Modal
      visible={visible}
      centered
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      footer={null}
      closeIcon={<CloseIcon />}
    >
      <TitleModal>Serviço disponível</TitleModal>
      <ContainerInfo>
        <ServiceClass>{service.serviceDetails.class}</ServiceClass>
        {service.serviceDetails.class.toLowerCase() !== "passadoria" && (
          <>
            <Subtitles>Detalhes:</Subtitles>
            <ServiceDetails>
              <li>{service.serviceDetails.bedroom} quartos</li>
              <li>{service.serviceDetails.bathroom} banheiros</li>
            </ServiceDetails>
          </>
        )}
        {error && ""}
        <Subtitles>Endereço:</Subtitles>
        <Adress>
          R. Gen. Mário Tourinho, 1733 - 706 - Seminário, Curitiba - PR,
          80740-000
        </Adress>
        <Subtitles>Contratante:</Subtitles>
        <GeneralInfo>nome do contratante</GeneralInfo>
        <ContainerRow>
          <ContainerInfo>
            <Subtitles>Duração total:</Subtitles>
            <GeneralInfo>{service.serviceDetails.hours} horas</GeneralInfo>
          </ContainerInfo>
          <ContainerInfo>
            <Subtitles>Valor</Subtitles>
            <GeneralInfo className="price">
              {formatValue(service.price)}
            </GeneralInfo>
          </ContainerInfo>
          <Button onClickFunc={handleAccept}>Aceitar</Button>
        </ContainerRow>
        <Button onClickFunc={handleAccept}>Aceitar</Button>
      </ContainerInfo>
    </Modal>
  );
};
export default ModalAvailableService;
