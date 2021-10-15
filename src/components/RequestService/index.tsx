import * as yup from "yup";
import React, { useState } from "react";
import InputRadio from "../InputRadio";
import {
    Container,
    Title,
    SectionTitle,
    Column,
    Number,
    Row,
    Border,
    WrapperInputsRadio,
    Subtitle,
    InputNumberWrapper,
    InputNumberLabel,
    LimitPieces,
    RoomsWrapper,
    WrapperDoubleInput,
} from "./styles";
import Input from "../Input";
import InputNumber from "../InputNumber";
import { useServices } from "../../providers/Services";
import { useAuth } from "../../providers/Auth";
import { FaTimes, FaTimesCircle } from "react-icons/fa";
import { notification } from "antd";
import { ServiceData } from "../../types/ServiceData";
import FormServiceInfo from "../FormServiceInfo";
import { useHistory } from "react-router-dom";
import { ContainerSelect, SelectStyled } from "../FormUpdateProfile/styles";
import { LabelStyled } from "../Input/styles";
import { format } from "date-fns";

interface servicesHoursElement {
    minHour: number;
    maxHour: number;
}

interface servicesHoursProps {
    [Passadoria: string]: servicesHoursElement;
    "Limpeza Residencial": servicesHoursElement;
}

interface basePriceProps {
    [Studio: string]: number;
    Apartamento: number;
    Casa: number;
}

const RequestService = () => {
    const [service, setService] = useState<string>("Limpeza Residencial");
    const [home, setHome] = useState<string>("");
    const [date, setDate] = useState("");
    const [dateISO, setDateISO] = useState<number>(() => {
        const now = new Date();

        return now.getTime();
    });
    const [hours, setHours] = useState("1");
    const [bedroom, setBedrooms] = useState("1");
    const [bathroom, setBathrooms] = useState("1");
    const [place, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [complements, setComplement] = useState("");
    const [cep, setCep] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setDistrict] = useState("");
    const [state, setUf] = useState("AC");
    const [error, setError] = useState(false);
    const [price, setPrice] = useState(0);
    const { newService } = useServices();
    const { user } = useAuth();
    const [dateError, setDateError] = useState(false);
    const [cepError, setCepError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [districtError, setDistrictError] = useState(false);
    const [addressError, setAddressError] = useState(false);

    const serviceHours: servicesHoursProps = {
        Passadoria: {
            minHour: 1,
            maxHour: 6,
        },
        "Limpeza Residencial": {
            minHour: 6,
            maxHour: 8,
        },
    };

    const basePrice: basePriceProps = {
        Studio: 120,
        Apartamento: 150,
        Casa: 180,
    };

    const handleHours = (newValue: string) => {
        newValue < hours ? setPrice(price - 20) : setPrice(price + 20);

        setHours(newValue);
    };

    const handleBedrooms = (newValue: string) => {
        newValue < bedroom ? setPrice(price - 10) : setPrice(price + 10);

        setBedrooms(newValue);
    };

    const handleBathrooms = (newValue: string) => {
        newValue < bathroom ? setPrice(price - 10) : setPrice(price + 10);

        setBathrooms(newValue);
    };

    async function getAddress(value: string) {
        let cep = value.replace(/(\d{5})(\d{3})/g, "$1-$2");
        setCep(cep);

        if (cep !== "" && cep.length === 9) {
            cep = cep.replace(/\D/g, "");
            const url = `https://viacep.com.br/ws/${cep}/json/unicode/`;

            fetch(url)
                .then((res) => res.json())
                .then((address) => {
                    setAddress(address.logradouro);
                    setDistrict(address.bairro);
                    setCity(address.localidade);
                    setUf(address.uf);
                });
        }
    }

    const history = useHistory();
    const idUser = localStorage.getItem("@CleanGo/idClient") || "0";

    const onSubmitFunction = async (e: React.MouseEvent) => {
        e.preventDefault();

        let serviceF: ServiceData = {} as ServiceData;
        let dateF = format(dateISO, "dd-MM-yyyy");
        service === "Limpeza Residencial"
            ? (serviceF = {
                  customer_id: parseInt(idUser),
                  date: dateF,
                  price: price,
                  service_details: {
                      class: service,
                      hours: parseInt(hours),
                      type: home,
                      bedrooms: parseInt(bedroom),
                      bathrooms: parseInt(bathroom),
                  },
                  opened: true,
                  completed: false,
                  partnerId: 0,
                  address: {
                      place,
                      complements,
                      number,
                      cep,
                      state,
                      neighborhood,
                      city,
                  },
                  contractor: user?.full_name,
              })
            : (serviceF = {
                  customer_id: parseInt(idUser),
                  date: dateF,
                  price: price,
                  service_details: {
                      class: service,
                      hours: parseInt(hours),
                      type: "Casa",
                      bedrooms: 0,
                      bathrooms: 0,
                  },
                  opened: true,
                  completed: false,
                  partnerId: 0,
                  address: {
                      place,
                      complements,
                      number,
                      cep,
                      state,
                      neighborhood,
                      city,
                  },
                  contractor: user?.full_name,
              });

        const schema = yup.object().shape({
            date: yup.string().required("Selecione uma data"),
            class: yup.string(),
            hours: yup.string(),
            type: yup.string(),
            bedroom: yup.number(),
            bathroom: yup.number(),
            complement: yup.string(),
            address: yup.object().shape({
                cep: yup.string().required("CEP obrigatório"),
                number: yup.string().required("Numero obrigatórios"),
                city: yup.string(),
                uf: yup.string(),
                district: yup.string(),
                place: yup.string(),
                complement: yup.string(),
            }),
        });
        console.log(serviceF);
        await schema
            .validate({ ...serviceF })
            .then((_) => {
                newService(serviceF, setError, history);
                cep === "" && setCepError(true);
            })
            .catch((err) => {
                console.log(err);
                notification.open({
                    message: "Erro.",
                    closeIcon: <FaTimes />,
                    style: {
                        fontFamily: "Roboto",
                        backgroundColor: "var(--gray)",
                        WebkitBorderRadius: 4,
                        zIndex: 5000,
                    },
                    description: "Erro criar serviço.",
                    icon: <FaTimesCircle style={{ color: "red" }} />,
                });
            });
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setHours("1");
        setPrice(0);
        if (value === "Passadoria") {
            setHome("");
            setPrice(80);
        } else {
            setHours("6");
            setBathrooms("1");
            setBedrooms("1");
        }
        value && setService(value);
    };

    const handleSelectChangeHome = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        value && setHome(value);

        let totalPrice =
            basePrice[value] +
            (parseInt(bathroom) - 1) * 10 +
            (parseInt(bedroom) - 1) * 10;

        if (value === "Studio") {
            setHours("5");
        } else {
            setHours("6");
        }
        setPrice(totalPrice);
    };
    return (
        <>
            <Container>
                <Row>
                    <Border>
                        <Number>1</Number>
                    </Border>
                    <Title>Solicite um serviço</Title>
                </Row>

                <WrapperInputsRadio>
                    <InputRadio
                        name="class"
                        value="Limpeza Residencial"
                        selected={service === "Limpeza Residencial"}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleSelectChange(e)
                        }
                    >
                        Limpeza Residêncial
                    </InputRadio>
                    <InputRadio
                        name="class"
                        value="Passadoria"
                        selected={service === "Passadoria"}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleSelectChange(e)
                        }
                    >
                        Passadoria
                    </InputRadio>
                </WrapperInputsRadio>
                {service === "Limpeza Residencial" && (
                    <Column>
                        <SectionTitle>Nos conte sobre o seu lar</SectionTitle>
                        <WrapperInputsRadio>
                            <InputRadio
                                name="type"
                                value="Studio"
                                selected={home === "Studio"}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => handleSelectChangeHome(e)}
                            >
                                Studio
                            </InputRadio>
                            <InputRadio
                                name="type"
                                value="Apartamento"
                                selected={home === "Apartamento"}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => handleSelectChangeHome(e)}
                            >
                                Apartamento
                            </InputRadio>
                            <InputRadio
                                name="type"
                                value="Casa"
                                selected={home === "Casa"}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => handleSelectChangeHome(e)}
                            >
                                Casa
                            </InputRadio>
                        </WrapperInputsRadio>
                        <RoomsWrapper>
                            <InputNumberWrapper>
                                <InputNumber
                                    name="bedroom"
                                    value={bedroom}
                                    maxValue={4}
                                    setValue={handleBedrooms}
                                ></InputNumber>
                                <InputNumberLabel>Quarto</InputNumberLabel>
                            </InputNumberWrapper>
                            <InputNumberWrapper>
                                <InputNumber
                                    name="bedroom"
                                    maxValue={4}
                                    value={bathroom}
                                    setValue={handleBathrooms}
                                ></InputNumber>
                                <InputNumberLabel>Banheiro</InputNumberLabel>
                            </InputNumberWrapper>
                        </RoomsWrapper>
                    </Column>
                )}
                <Row>
                    <WrapperDoubleInput>
                        <Column>
                            <SectionTitle>Quantas Horas?</SectionTitle>
                            <Subtitle>
                                Você pode escolher quantas horas quiser
                            </Subtitle>
                            <WrapperDoubleInput>
                                <InputNumberWrapper>
                                    {home === "Studio" ? (
                                        <InputNumber
                                            name="type"
                                            value={hours}
                                            maxValue={5}
                                            minValue={5}
                                            setValue={handleHours}
                                        />
                                    ) : (
                                        <InputNumber
                                            name="type"
                                            value={hours}
                                            maxValue={
                                                serviceHours[service].maxHour
                                            }
                                            minValue={
                                                serviceHours[service].minHour
                                            }
                                            setValue={handleHours}
                                        />
                                    )}

                                    <InputNumberLabel>Horas</InputNumberLabel>

                                    {service === "Passadoria" && (
                                        <LimitPieces>{`Limite de ${
                                            parseInt(hours) * 15
                                        } peças`}</LimitPieces>
                                    )}
                                </InputNumberWrapper>
                            </WrapperDoubleInput>
                        </Column>
                        <Column>
                            <SectionTitle>Qual a data?</SectionTitle>
                            <Subtitle>
                                Selecione um dia para o serviço.
                            </Subtitle>
                            <Input
                                // label="Selecione um dia para o serviço."
                                inputType="date"
                                errorMessage="Campo obrigatório"
                                error={dateError}
                                name="date"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    const value = e.target.valueAsDate;
                                    if (value) {
                                        const date = new Date(value);
                                        setDate(e.target.value);
                                        setDateISO(date.getTime());
                                    }
                                    setDateError(false);
                                }}
                                value={date}
                                required
                            />
                        </Column>
                    </WrapperDoubleInput>
                </Row>
                <Column>
                    <WrapperDoubleInput>
                        <Input
                            label="CEP"
                            inputType="text"
                            placeholder="00000-000"
                            errorMessage="Campo obrigatório"
                            error={cepError}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                getAddress(e.target.value);
                                setCepError(false);
                            }}
                            value={cep}
                        />
                        <ContainerSelect>
                            <LabelStyled htmlFor="uf">Estado</LabelStyled>
                            <SelectStyled name="uf" id="uf" value={state}>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </SelectStyled>
                        </ContainerSelect>
                    </WrapperDoubleInput>
                    <WrapperDoubleInput>
                        <Input
                            label="Endereço"
                            inputType="text"
                            placeholder="Digite seu endereço"
                            errorMessage="Campo obrigatório"
                            error={addressError}
                            value={place}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setAddress(e.target.value);
                                setAddressError(false);
                            }}
                        />
                        <Input
                            label="Número"
                            inputType="text"
                            placeholder="Digite o número do endereço"
                            errorMessage="Campo obrigatório"
                            error={numberError}
                            value={number}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setNumber(e.target.value);
                                setNumberError(false);
                            }}
                        />
                    </WrapperDoubleInput>
                    <WrapperDoubleInput>
                        <Input
                            label="Bairro"
                            inputType="text"
                            placeholder="Digite seu bairro"
                            errorMessage="Campo obrigatório"
                            error={districtError}
                            value={neighborhood}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setDistrict(e.target.value);
                                setDistrictError(false);
                            }}
                        />

                        <Input
                            label="Cidade"
                            inputType="text"
                            placeholder="Digite sua cidade"
                            errorMessage="Campo obrigatório"
                            error={cityError}
                            value={city}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setCity(e.target.value);
                                setCityError(false);
                            }}
                        />
                    </WrapperDoubleInput>

                    <WrapperDoubleInput>
                        <Input
                            label="Complemento"
                            inputType="text"
                            placeholder="Apartameto / Bloco"
                            errorMessage="Campo obrigatório"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setComplement(e.target.value);
                            }}
                            value={complements}
                        />
                    </WrapperDoubleInput>
                </Column>

                {/* <DateWrapper>
                            <Subtitle>
                                Selecione um dia para o serviço.
                            </Subtitle>
                            <Input
                                // label="Selecione um dia para o serviço."
                                inputType="date"
                                errorMessage="Campo obrigatório"
                                error={dateError}
                                name="date"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    const value = e.target.valueAsDate;
                                    if (value) {
                                        const date = new Date(value);
                                        setDate(e.target.value);
                                        setDateISO(date.getTime());
                                    }
                                    setDateError(false);
                                }}
                                value={date}
                                required
                            />
                        </DateWrapper> */}
                {/* <Column>
                    <SectionTitle>Qual a data?</SectionTitle>
                </Column> */}
            </Container>
            <FormServiceInfo
                onSubmitFunction={onSubmitFunction}
                price={price}
                hours={hours}
                service={service}
            ></FormServiceInfo>
            {error && ""}
        </>
    );
};

export default RequestService;
