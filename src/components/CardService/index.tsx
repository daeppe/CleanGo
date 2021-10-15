import { ServiceData } from "../../types/ServiceData";
import { Container } from "./styles";
import formatValue from "../../utils/formatedPrice";
import ModalAvailableService from "../ModalAvailableService";
import { useState } from "react";

interface CardProps {
    service: ServiceData;
}
const CardService = ({ service }: CardProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <Container onClick={() => setVisible(!visible)}>
            <ModalAvailableService
                service={service}
                visible={visible}
                setVisible={setVisible}
            />
            <h2>{service.service_details.class}</h2>
            {service.service_details.class?.toLowerCase() !== "passadoria" && (
                <ul>
                    <li>{service.service_details.bedrooms} quartos</li>
                    <li>{service.service_details.bathrooms} banheiros</li>
                </ul>
            )}
            <h3>{service.service_details.hours} horas</h3>
            <div>
                <span>Valor</span>
                <h3 className="price">{formatValue(service.price)}</h3>
            </div>
        </Container>
    );
};
export default CardService;
