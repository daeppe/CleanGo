import React, { ReactNode, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ServiceData } from "../../types/ServiceData";
import formatValue from "../../utils/formatedPrice";
import CardService from "../CardService";
import { ContentModal, CustomModal } from "./styles";

interface ModalServiceProps {
  children?: ReactNode;
  title: string;
  buttonText: string;
  buttonFunc: (serviceId: number, userId: number) => void;
  service: ServiceData;
}

const ModalService = ({
  children,
  title,
  buttonText,
  buttonFunc,
  service,
}: ModalServiceProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        title={title}
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
      >
        <ContentModal>
          <h2>{service.serviceDetails.class}</h2>
          {service.serviceDetails.class?.toLowerCase() !== "passadoria" && (
            <>
              <h4>Detalhes:</h4>
              <ul>
                <li>{service.serviceDetails.bedroom} quartos</li>
                <li>{service.serviceDetails.bathroom} banheiros</li>
              </ul>
            </>
          )}
          <h4>Endereço:</h4>
          <p></p>
          <h4>{service.serviceDetails.hours} horas</h4>
          <div>
            <span>Valor</span>
            <h4 className="price">{formatValue(service.price)}</h4>
          </div>
        </ContentModal>
      </CustomModal>
    </>
  );
};

export default ModalService;
