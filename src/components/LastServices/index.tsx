import React from "react";
import { ServiceData } from "../../types/ServiceData";

import { Container } from "./styles";

interface LastServicesProps {
  services: ServiceData[];
}

const LastServices = ({ services }: LastServicesProps) => {
  return <Container></Container>;
};

export default LastServices;
