import formatValue from "../../utils/formatedPrice";
import Button from "../Button";
import {
  Container,
  TitleContainer,
  Title,
  Flex,
  InfoContainer,
  InfoTitle,
  Info,
  ButtonWrapper,
} from "./styles";

interface FormServiceProps {
  onSubmitFunction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hours: string;
  price: number;
}

const FormServiceInfo = ({
  onSubmitFunction,
  hours,
  price,
}: FormServiceProps) => {
  return (
    <Container>
      <TitleContainer>
        <Title>Total</Title>
      </TitleContainer>
      <Flex>
        <InfoContainer>
          <InfoTitle>Serviço selecionado</InfoTitle>
          <Info>Limpeza residencial</Info>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Quantidade de horas</InfoTitle>
          <Info>{hours} horas</Info>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Valor total</InfoTitle>
          <Info>{formatValue(price)}</Info>
        </InfoContainer>
      </Flex>
      <ButtonWrapper>
        <Button
          type="submit"
          onClickFunc={(e: React.MouseEvent<HTMLButtonElement>) =>
            onSubmitFunction(e)
          }
        >
          Confirmar
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default FormServiceInfo;
