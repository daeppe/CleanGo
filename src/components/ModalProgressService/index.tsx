import { SetStateAction, Dispatch, useState } from "react";
import { ServiceData } from "../../types/ServiceData";
import formatValue from "../../utils/formatedPrice";
import Button from "../Button";
import { useServices } from "../../providers/Services";
import {
    ContainerInfo,
    ContainerRow,
    CloseIcon,
    ServiceClass,
    Subtitles,
    GeneralInfo,
    Adress,
    ServiceDetails,
    CustomModal,
    WrapperStars,
    Stars,
    ContainerTextArea,
    LabelStyled,
    TextAreaStyled,
    ErrorMessage,
} from "./styles";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useFeedback } from "../../providers/Feedbacks";
interface ModalProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    service: ServiceData;
}
const ModalProgressService = ({ service, visible, setVisible }: ModalProps) => {
    const [error, setError] = useState<boolean>(false);
    const [completed, setCompleted] = useState<boolean>(false);
    const [stars, setStars] = useState(0);
    const [about, setAbout] = useState("");
    const [aboutError, setAboutError] = useState(false);
    const { newFeedback } = useFeedback();
    const { finishService } = useServices();

    const handleCompleted = () => {
        finishService(true, setError, service?.id, setVisible);
        setCompleted(true);
        // setVisible(!visible);
    };

    const submitReview = () => {
        const review = {
            userId: service?.customer_id,
            score: stars,
            feedback: about,
        };

        newFeedback(review, setVisible);
        setError(false);
        setAboutError(false);
    };

    return (
        <CustomModal
            visible={visible}
            centered
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}
            closeIcon={<CloseIcon />}
            width={600}
            title={completed ? "Avaliar serviço" : "Serviço em andamento"}
            okText="Criar"
            cancelText="Cancelar"
        >
            <ContainerInfo>
                {completed ? (
                    <>
                        <ServiceClass>
                            Avaliar: {service?.contractor}
                        </ServiceClass>
                        {error && ""}
                        <WrapperStars>
                            <Stars onClick={() => setStars(1)}>
                                {stars >= 1 ? <FaStar /> : <FaRegStar />}
                            </Stars>
                            <Stars onClick={() => setStars(2)}>
                                {stars >= 2 ? <FaStar /> : <FaRegStar />}
                            </Stars>
                            <Stars onClick={() => setStars(3)}>
                                {stars >= 3 ? <FaStar /> : <FaRegStar />}
                            </Stars>
                            <Stars onClick={() => setStars(4)}>
                                {stars >= 4 ? <FaStar /> : <FaRegStar />}
                            </Stars>
                            <Stars onClick={() => setStars(5)}>
                                {stars === 5 ? <FaStar /> : <FaRegStar />}
                            </Stars>
                        </WrapperStars>
                        <ContainerTextArea>
                            <LabelStyled>Sobre você</LabelStyled>
                            <TextAreaStyled
                                error={false}
                                placeholder="Apresente-se para seus clientes"
                                value={about}
                                required
                                onChange={(
                                    e: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setAbout(e.target.value)}
                            ></TextAreaStyled>
                            {aboutError && (
                                <ErrorMessage>Campo obrigatório</ErrorMessage>
                            )}
                        </ContainerTextArea>
                        <ContainerRow>
                            <div></div>
                            <Button onClickFunc={submitReview}>Enviar</Button>
                        </ContainerRow>
                    </>
                ) : (
                    <>
                        <ServiceClass>
                            {service?.service_details?.class}
                        </ServiceClass>
                        {service?.service_details?.class.toLowerCase() !==
                            "passadoria" && (
                            <>
                                <Subtitles>Detalhes:</Subtitles>
                                <ServiceDetails>
                                    <li>
                                        {service?.service_details?.bedrooms}{" "}
                                        quartos
                                    </li>
                                    <li>
                                        {service?.service_details?.bathrooms}{" "}
                                        banheiros
                                    </li>
                                </ServiceDetails>
                            </>
                        )}
                        {error && ""}
                        <Subtitles>Endereço:</Subtitles>
                        <Adress>{`${service?.address?.place}, ${
                            service?.address?.number
                        } ${
                            service?.address?.complements &&
                            service?.address?.complements
                        } - ${service?.address?.neighborhood},  ${
                            service?.address?.city
                        } - ${service?.address?.state}, ${
                            service?.address?.cep
                        }`}</Adress>
                        <Subtitles>Contratado:</Subtitles>
                        <GeneralInfo>{service?.partner}</GeneralInfo>
                        <ContainerRow>
                            <ContainerInfo>
                                <Subtitles>Duração total:</Subtitles>
                                <GeneralInfo className="hours">
                                    {service?.service_details?.hours} horas
                                </GeneralInfo>
                            </ContainerInfo>
                            <ContainerInfo>
                                <Subtitles>Valor</Subtitles>
                                <GeneralInfo className="price">
                                    {formatValue(service?.price)}
                                </GeneralInfo>
                            </ContainerInfo>
                            <Button onClickFunc={handleCompleted}>
                                Concluído
                            </Button>
                        </ContainerRow>
                        <Button onClickFunc={handleCompleted}>Concluído</Button>
                    </>
                )}
            </ContainerInfo>
        </CustomModal>
    );
};
export default ModalProgressService;
