import React, { useState, useEffect } from "react";
import CardService from "../../../components/CardService";
import { useServices } from "../../../providers/Services";
import {
    ContainerServices,
    Container,
    ContainerButton,
    ButtonStyled,
    Title,
} from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { usePartners } from "../../../providers/Partners";
import { useAuth } from "../../../providers/Auth";
const Services = () => {
    const [error, setError] = useState<boolean>(false);
    const [disableNext, setDisableNext] = useState<boolean>(false);
    const [disablePrev, setDisablePrev] = useState<boolean>(true);
    const { getServices, services, filteredServices } = useServices();
    const { getPartner, partner } = usePartners();
    const { token, user } = useAuth();
    const [pageNumber, setPageNumber] = useState<number>(1);

    const handleNextPage = () => {
        setPageNumber(pageNumber + 1);
        if (services.length < 12 || filteredServices.length < 12) {
            setDisableNext(true);
        }
        setDisablePrev(false);
    };
    const handlePrevPage = () => {
        if (pageNumber >= 2) {
            setPageNumber(pageNumber - 1);
            setDisablePrev(false);
            setDisableNext(false);
        } else {
            setDisableNext(false);
            setDisablePrev(true);
        }
    };

    useEffect(() => {
        if (user?.id !== undefined) {
            getPartner(user.id, token);
            getServices(setError, pageNumber, 12);
        }

        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (pageNumber === 1) {
            setDisablePrev(true);
        }
        // eslint-disable-next-line
    }, [pageNumber]);
    return (
        <Container>
            <Title>
                Aqui estão os serviços disponíves de {partner?.service}
            </Title>

            {error && ""}
            <ContainerServices>
                {services
                    .filter(
                        (service) =>
                            service.service_details.class?.toLowerCase() ===
                            partner.service?.toLowerCase()
                    )
                    .map((service) => (
                        <CardService service={service} />
                    ))}
            </ContainerServices>
            <ContainerButton>
                <ButtonStyled disabled={disablePrev} onClick={handlePrevPage}>
                    <FaChevronLeft />
                </ButtonStyled>
                <ButtonStyled disabled={disableNext} onClick={handleNextPage}>
                    <FaChevronRight />
                </ButtonStyled>
            </ContainerButton>
        </Container>
    );
};
export default Services;
