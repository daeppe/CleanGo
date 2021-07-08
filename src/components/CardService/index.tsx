import { ServiceData } from "../../types/ServiceData";
import { Container } from "./styles";
interface CardProps {
  service: ServiceData;
}
const CardService = ({ service }: CardProps) => {
  return (
    <Container>
      <h2>{service.serviceDetails.class}</h2>
      <ul>
        <li>{service.serviceDetails.bedroom} quartos</li>
        <li>{service.serviceDetails.bathroom} banheiros</li>
      </ul>
      <h3>{service.serviceDetails.hours} horas</h3>
      <div>
        <span>Valor</span>
        <h3 className="price">{service.price}</h3>
      </div>
    </Container>
  );
};
export default CardService;
