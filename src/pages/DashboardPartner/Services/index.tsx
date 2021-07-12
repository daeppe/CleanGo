import React, { useState, useEffect } from "react";
import CardService from "../../../components/CardService";
import { useServices } from "../../../providers/Services";
import {
  ContainerServices,
  Container,
  ContainerSelect,
  LabelStyled,
  SelectStyled,
} from "./styles";
const Services = () => {
  const [error, setError] = useState<boolean>(false);
  // const [disable, setDisable] = useState<boolean>(true);
  const { getServices, services, filterServices, filteredServices } =
    useServices();
  const [option, setOption] = useState<string>("");

  useEffect(() => {
    getServices(setError);
  }, [getServices]);
  return (
    <Container>
      <ContainerSelect>
        <LabelStyled htmlFor="categoria">Filtrar por categoria</LabelStyled>
        <SelectStyled
          name="categoria"
          id="categoria"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setOption(e.target.value);
            filterServices(e.target.value);
          }}
          value={option}
        >
          <option value="">Categoria</option>
          <option value="Passadoria">Passadoria</option>
          <option value="Limpeza Residencial">Limpeza Residencial</option>
        </SelectStyled>
      </ContainerSelect>
      {error && ""}
      <ContainerServices>
        {!option
          ? services.map((service) => (
              <CardService service={service} key={service.id} />
            ))
          : filteredServices.map((service) => (
              <CardService service={service} key={service.id} />
            ))}
      </ContainerServices>
    </Container>
  );
};
export default Services;
