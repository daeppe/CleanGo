import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, ContainerInner } from "./styles";
import Map from "../../asssets/svg/map.svg";
import Briefcase from "../../asssets/svg/briefcase.svg";
import BagOfMoney from "../../asssets/svg/bag-of-money.svg";

const CardReasons = () => {
  const CardOne = useRef<HTMLDivElement>(null);
  const CardTwo = useRef<HTMLDivElement>(null);
  const CardThree = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(CardOne.current, {
      opacity: 0,
      scale: 0,
      transformOrigin: "center center",
      translateX: 200,

      scrollTrigger: {
        trigger: CardOne.current,
        scrub: 2,
        start: "top 90%",
        end: "top 70%",
      },
    });
    gsap.from(CardTwo.current, {
      opacity: 0,
      scale: 0,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: CardTwo.current,
        scrub: 3,
        start: "top 90%",
        end: "top 70%",
      },
    });
    gsap.from(CardThree.current, {
      opacity: 0,
      transformOrigin: "center center",
      translateX: -200,
      scale: 0,
      scrollTrigger: {
        trigger: CardThree.current,
        scrub: 2,
        start: "top 90%",
        end: "top 70%",
      },
    });
  }, []);

  return (
    <Container>
      <ContainerInner ref={CardOne}>
        <h1>Empreenda você mesmo</h1>
        <img src={Briefcase} alt="Empreendedor" />
        <p>
          Seja seu próprio chefe e concilie sua agenda pessoal e profissional.
        </p>
      </ContainerInner>
      <ContainerInner ref={CardTwo}>
        <h1>Trabalhe perto de casa</h1>
        <img src={Map} alt="Mapa" />
        <p>
          Escolha os melhores lugares para trabalhar e o melhor perto de você.
        </p>
      </ContainerInner>
      <ContainerInner ref={CardThree}>
        <h1>Complemente sua renda</h1>
        <img src={BagOfMoney} alt="Dinheiro" />
        <p>Você escolhe no que trabalhar e recebe por hora trabalhada.</p>
      </ContainerInner>
    </Container>
  );
};
export default CardReasons;
