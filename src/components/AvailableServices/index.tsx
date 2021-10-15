import React, { useEffect, useState } from "react";
// import { ServiceData } from "../../types/ServiceData";
import CardService from "../CardService";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from "./styles";
import { SliderWrapper } from "./styles";
import { useServices } from "../../providers/Services";
import { useAuth } from "../../providers/Auth";
import { usePartners } from "../../providers/Partners";

const responsive = {
    0: { items: 1 },
    350: { items: 1.5 },
    720: { items: 1 },
    968: { items: 2 },
    1200: { items: 3 },
    1600: { items: 4.5 },
};

const AvailableServices = () => {
    const { getServices, services } = useServices();
    const { user, token } = useAuth();
    const { getPartner, partner } = usePartners();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!services || services.length === 0) {
            if (user?.id !== undefined) {
                getPartner(user.id, token);
                getServices(setError);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <h2>Serviços disponíveis</h2>
            {services.length === 0 || error ? (
                <h3>Não há serviços em aberto</h3>
            ) : (
                <SliderWrapper>
                    <AliceCarousel
                        mouseTracking
                        disableDotsControls
                        responsive={responsive}
                        items={services
                            .filter(
                                (service) =>
                                    service.service_details.class?.toLowerCase() ===
                                    partner.service?.toLowerCase()
                            )
                            .map((service) => (
                                <CardService service={service} />
                            ))}
                        paddingLeft={20}
                        paddingRight={20}
                    />
                </SliderWrapper>
            )}
        </Container>
    );
};

export default AvailableServices;
