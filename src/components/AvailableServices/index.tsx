import React from "react";
import Slider from "react-slick";

import { Container } from "../HeaderNavAuth/styles";

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
      <Slider {...settings}></Slider>
    </Container>
  );
};

export default AvailableServices;
