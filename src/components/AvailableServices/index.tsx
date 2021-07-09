import React from "react";
import Slider from "react-slick";
import { ServiceData } from "../../types/ServiceData";
import CardService from "../CardService";

import { Container } from "./styles";
import { SliderWrapper } from "./styles";

const servico: ServiceData[] = [
  {
    userId: 2,
    date: 1625795778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625795778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625795778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625795778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625905948898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625805778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Passadoria",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625915879898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Passadoria",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
];

const AvailableServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Container>
      <h2>Serviços disponíveis</h2>
      <SliderWrapper>
        <Slider {...settings}>
          {servico.map((service) => (
            <CardService service={service} />
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

export default AvailableServices;
