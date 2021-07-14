import { SetStateAction, Dispatch, useEffect, useState } from "react";
import { ServiceData } from "../../types/ServiceData";
import formatValue from "../../utils/formatedPrice";
import Button from "../Button";
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
import { useClients } from "../../providers/Clients";
interface ModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  service: ServiceData;
}
const OpenServiceModal = ({ service, visible, setVisible }: ModalProps) => {
  const { finishService } = useServices();
  const [error, setError] = useState<boolean>(false);
  const { searchClient, client } = useClients();
  const handleCompleted = () => {
    finishService(true, setError, service.id);
    setVisible(!visible);
  };

  useEffect(() => {
    searchClient(service.partnerId);
    console.log(client);
  });
  return (
    <CustomModal
      visible={visible}
      centered
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      footer={null}
      closeIcon={<CloseIcon />}
      width={600}
      title="Serviço em andamento"
      okText="Criar"
      cancelText="Cancelar"
    >
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
        <Adress>{`${service.address} - ${service.district},  ${service.city} - ${service.uf}, ${service.cep}`}</Adress>
        <Subtitles>Contratado:</Subtitles>
        <GeneralInfo>{client.name}</GeneralInfo>
        <ContainerRow>
          <ContainerInfo>
            <Subtitles>Duração total:</Subtitles>
            <GeneralInfo className="hours">
              {service.serviceDetails.hours} horas
            </GeneralInfo>
          </ContainerInfo>
          <ContainerInfo>
            <Subtitles>Valor</Subtitles>
            <GeneralInfo className="price">
              {formatValue(service.price)}
            </GeneralInfo>
          </ContainerInfo>
          <Button onClickFunc={handleCompleted}>Concluído</Button>
        </ContainerRow>
        <Button onClickFunc={handleCompleted}>Concluído</Button>
      </ContainerInfo>
    </CustomModal>
  );
};
export default OpenServiceModal;
