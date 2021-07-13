import React, { useState } from "react";
import { useEffect } from "react";
import { ServiceData } from "../../types/ServiceData";
import ModalReviewService from "../ModalReviewService";
import formatValue from "../../utils/formatedPrice";

import { Container, Content, TableRow, TitleTable } from "./styles";

interface LastServicesProps {
  services: ServiceData[];
}

interface TableRowElementProps {
  service: ServiceData;
}

const TableRowElement = ({ service }: TableRowElementProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Content onClick={() => setVisible(!visible)}>
        <TableRow>{service.serviceDetails.class}</TableRow>
        <TableRow>{}</TableRow>
        <TableRow>{formatValue(service.price)}</TableRow>
      </Content>
      <ModalReviewService
        service={service}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

const LastServices = ({ services }: LastServicesProps) => {
  useEffect(() => {
    console.log(services);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services]);

  return (
    <Container>
      <h2>Últimos serviços</h2>
      <Content>
        <TitleTable>Serviço</TitleTable>
        <TitleTable>Data</TitleTable>
        <TitleTable>Valor</TitleTable>
      </Content>
      {services.length > 0 ? (
        <>
          {services.map((service) => (
            <TableRowElement service={service} key={service.id} />
          ))}
        </>
      ) : (
        <span>Não há nenhum serviço realizado.</span>
      )}
    </Container>
  );
};

export default LastServices;
