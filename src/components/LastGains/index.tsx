import React from "react";
import { Container } from "./style";
import formatValue from "../../utils/formatedPrice";

interface LastGainsProps {
  total: number;
}

const LastGains = ({ total }: LastGainsProps) => {
  return (
    <Container>
      <h2>Receitas mensal</h2>
      <span>{formatValue(total)}</span>
    </Container>
  );
};

export default LastGains;
