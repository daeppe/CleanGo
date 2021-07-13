import React from "react";
import { useEffect } from "react";
import { ServiceData } from "../../types/ServiceData";

import { Container } from "./styles";

interface LastServicesProps {
  services: ServiceData[];
}

const LastServices = ({ services }: LastServicesProps) => {
  useEffect(() => {
    console.log(services);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h2>Últimos serviços</h2>
    </Container>
  );
};

export default LastServices;
