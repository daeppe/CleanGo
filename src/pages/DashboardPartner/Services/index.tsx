import { useState } from "react";
import { useEffect } from "react";
import CardService from "../../../components/CardService";
import { useServices } from "../../../providers/Services";
import { ContainerServices } from "./styles";
const Services = () => {
  const [error, setError] = useState<boolean>(false);
  const { getServices, services, setServices } = useServices();

  useEffect(() => {
    getServices(setError);
  }, []);
  return (
    <ContainerServices>
      {services.map((service) => (
        <CardService service={service} key={service.id} />
      ))}
    </ContainerServices>
  );
};
export default Services;
