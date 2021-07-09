import { useState } from "react";
import { useEffect } from "react";
import CardService from "../../../components/CardService";
import { useServices } from "../../../providers/Services";
import {
  ContainerServices,
  Container,
  ContainerSelect,
  LabelStyled,
  SelectStyled,
} from "./styles";
import Input from "../../../components/Input";
const Services = () => {
  const [error, setError] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [disable, setDisable] = useState<boolean>(false);
  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
    getServicesPaginated(pageNumber);
  };
  const handlePrevPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
      getServicesPaginated(pageNumber, 4);
    } else {
      setDisable(true);
    }
  };
  const {
    getServices,
    services,
    setServices,
    filterServices,
    filteredServices,
    getServicesPaginated,
  } = useServices();
  const [option, setOption] = useState<string>("");
  useEffect(() => {
    getServices(setError);
    console.log(window.innerWidth);
  }, []);
  return (
    <Container>
      <div>
        <button onClick={handleNextPage}>prox</button>
        <button onClick={handlePrevPage}>prev</button>
      </div>
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
