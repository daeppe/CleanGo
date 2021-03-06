import React, { Dispatch, useState } from "react";
import * as yup from "yup";
import { History } from "history";

import Input from "../Input";
import Button from "../Button";
import InputRadio from "../InputRadio";

import {
    FormStyled,
    WrapperDoubleInput,
    LabelStyled,
    SelectStyled,
    ContainerSelect,
    WrapperInputsRadio,
    ContainerTextArea,
    TextAreaStyled,
    ErrorMessage,
} from "./styles";

import { usePartners } from "../../providers/Partners";
import { PartnerData } from "../../types/partnerData";
import { FaSpinner } from "react-icons/fa";
import { format } from "date-fns";

interface FormNewPartnerFirstStepProps {
    setNewPartnerState: Dispatch<{}>;
    setSectionForm: Dispatch<number>;
}

interface FormNewPartnerSecondStepProps {
    newPartnerState: PartnerData;
    setNewPartnerState: Dispatch<{}>;
    setSectionForm: Dispatch<number>;
}

interface FormNewPartnerThirtyStepProps {
    newPartnerState: PartnerData;
    setNewPartnerState: Dispatch<{}>;
    history: History;
}

export const FormNewPartnerFirstStep = ({
    setNewPartnerState,
    setSectionForm,
}: FormNewPartnerFirstStepProps) => {
    const [full_name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [cpfMasked, setCpfMasked] = useState("");
    const [birthday, setBirthday] = useState("");
    const [birthdayISO, setBirthdayISO] = useState<number>(() => {
        const now = new Date();
        return now.getTime();
    });
    const [gender, setGender] = useState("masculino");
    const [phone, setPhone] = useState("");
    const [phoneMasked, setPhoneMasked] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [cpfError, setCpfError] = useState(false);
    const [birthdayError, setBirthdayError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const cpfMask = (value: string) => {
        setCpf(value);
        let valueMasked = value.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/g,
            "$1.$2.$3-$4"
        );
        setCpfMasked(valueMasked);
    };

    const phoneMask = (value: string) => {
        setPhone(value);
        let valueMasked = value.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
        setPhoneMasked(valueMasked);
    };

    const handleSubmitFirstStep = async (e: React.MouseEvent) => {
        e.preventDefault();

        const partner = {
            full_name,
            email,
            cpf,
            birthday,
            gender,
            phone,
        };

        const firstSchema = yup.object().shape({
            full_name: yup
                .string()
                .required("Todos os campos s??o obrigat??rios"),
            email: yup.string().required("Todos os campos s??o obrigat??rios"),
            cpf: yup.string().required("Todos os campos s??o obrigat??rios"),
            gender: yup.string().required("Todos os campos s??o obrigat??rios"),
            phone: yup.string().required("Todos os campos s??o obrigat??rios"),
            birthday: yup.string().required("Todos os campos s??o obrigat??rios"),
        });

        await firstSchema
            .validate({ ...partner })
            .then((v) => {
                let birthdayFormatted = format(birthdayISO, "yyyy-MM-dd");
                console.log(typeof birthdayFormatted);

                setNewPartnerState({ ...v, birthday: birthdayFormatted });
                setSectionForm(2);
            })
            .catch((err) => {
                full_name === "" && setNameError(true);
                email === "" && setEmailError(true);
                cpf === "" && setCpfError(true);
                phone === "" && setPhoneError(true);
                birthday === "" && setBirthdayError(true);
            });
    };

    return (
        <FormStyled>
            <Input
                label="Nome Completo"
                inputType="text"
                placeholder="Digite seu nome"
                errorMessage="Campo obrigat??rio"
                error={nameError}
                name="full_name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value);
                    setNameError(false);
                }}
                value={full_name}
                required
            />
            <Input
                label="Email"
                inputType="email"
                placeholder="Digite seu email"
                errorMessage="Campo obrigat??rio"
                error={emailError}
                name="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                }}
                value={email}
                required
            />
            <WrapperDoubleInput>
                <Input
                    label="CPF (apenas n??meros)"
                    inputType="text"
                    placeholder="Digite seu CPF"
                    errorMessage="CPF inv??lido"
                    error={cpfError}
                    maxLength={14}
                    name="cpf"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        cpfMask(e.target.value);
                        setCpfError(false);
                    }}
                    value={cpfMasked}
                    required
                />
                <Input
                    label="Data de nascimento"
                    inputType="date"
                    errorMessage="Campo obrigat??rio"
                    error={birthdayError}
                    name="birthday"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.valueAsDate;
                        if (value) {
                            const date = new Date(value);
                            setBirthdayISO(date.getTime());
                            setBirthday(e.target.value);
                        }
                        setBirthdayError(false);
                    }}
                    value={birthday}
                    required
                />
            </WrapperDoubleInput>
            <WrapperDoubleInput>
                <ContainerSelect>
                    <LabelStyled htmlFor="sexo">Sexo</LabelStyled>
                    <SelectStyled
                        name="sexo"
                        id="sexo"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            setGender(e.target.value);
                        }}
                        value={gender}
                        required
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </SelectStyled>
                </ContainerSelect>
                <Input
                    label="Celular"
                    inputType="text"
                    placeholder="(00) 00000-0000"
                    errorMessage="Campo obrigat??rio"
                    maxLength={14}
                    error={phoneError}
                    name="phone"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        phoneMask(e.target.value);
                        setPhoneError(false);
                    }}
                    value={phoneMasked}
                    required
                />
            </WrapperDoubleInput>

            <Button
                type="button"
                onClickFunc={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleSubmitFirstStep(e)
                }
            >
                Continuar
            </Button>
        </FormStyled>
    );
};

export const FormNewPartnerSecondStep = ({
    newPartnerState,
    setNewPartnerState,
    setSectionForm,
}: FormNewPartnerSecondStepProps) => {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [uf, setUf] = useState("AC");
    const [complement, setComplement] = useState("");
    const [numberError, setNumberError] = useState(false);
    const [cepError, setCepError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [districtError, setDistrictError] = useState(false);

    async function getAddres(value: string) {
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

    const handleSubmitSecondStep = async (e: React.MouseEvent) => {
        e.preventDefault();

        const partner = {
            cep,
            uf,
            address,
            number,
            district,
            city,
            complement,
        };

        const secondSchema = yup.object().shape({
            cep: yup.string().required("Todos os campos s??o obrigat??rios"),
            uf: yup.string().required("Todos os campos s??o obrigat??rios"),
            address: yup.string().required("Todos os campos s??o obrigat??rios"),
            number: yup.string().required("Todos os campos s??o obrigat??rios"),
            district: yup.string().required("Todos os campos s??o obrigat??rios"),
            city: yup.string().required("Todos os campos s??o obrigat??rios"),
            complement: yup.string().notRequired(),
        });

        await secondSchema
            .validate({ ...partner })
            .then((v) => {
                setNewPartnerState({ ...newPartnerState, ...v });
                setSectionForm(3);
            })
            .catch((err) => {
                cep === "" && setCepError(true);
                address === "" && setAddressError(true);
                district === "" && setDistrictError(true);
                city === "" && setCityError(true);
                number === "" && setNumberError(true);
            });
    };

    return (
        <FormStyled>
            <WrapperDoubleInput>
                <Input
                    label="CEP"
                    inputType="text"
                    placeholder="00000-000"
                    errorMessage="Campo obrigat??rio"
                    error={cepError}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        getAddres(e.target.value);
                        setCepError(false);
                    }}
                    value={cep}
                />
                <ContainerSelect>
                    <LabelStyled htmlFor="uf">Estado</LabelStyled>
                    <SelectStyled name="uf" id="uf" value={uf}>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amap??</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Cear??</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Esp??rito Santo</option>
                        <option value="GO">Goi??s</option>
                        <option value="MA">Maranh??o</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Par??</option>
                        <option value="PB">Para??ba</option>
                        <option value="PR">Paran??</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piau??</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rond??nia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">S??o Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </SelectStyled>
                </ContainerSelect>
            </WrapperDoubleInput>
            <WrapperDoubleInput>
                <Input
                    label="Endere??o"
                    inputType="text"
                    placeholder="Digite seu endere??o"
                    errorMessage="Campo obrigat??rio"
                    error={addressError}
                    value={address}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setAddress(e.target.value);
                        setAddressError(false);
                    }}
                />
                <Input
                    label="N??mero"
                    inputType="text"
                    placeholder="Digite o n??mero do endere??o"
                    errorMessage="Campo obrigat??rio"
                    error={numberError}
                    value={number}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                    errorMessage="Campo obrigat??rio"
                    error={districtError}
                    value={district}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setDistrict(e.target.value);
                        setDistrictError(false);
                    }}
                />

                <Input
                    label="Cidade"
                    inputType="text"
                    placeholder="Digite sua cidade"
                    errorMessage="Campo obrigat??rio"
                    error={cityError}
                    value={city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCity(e.target.value);
                        setCityError(false);
                    }}
                />
            </WrapperDoubleInput>

            <Input
                label="Complemento"
                inputType="text"
                placeholder="Apt, bloco..."
                errorMessage=""
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setComplement(e.target.value)
                }
                value={complement}
            />

            <Button
                type="button"
                onClickFunc={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleSubmitSecondStep(e)
                }
            >
                Continuar
            </Button>
        </FormStyled>
    );
};

export const FormNewPartnerThirtyStep = ({
    newPartnerState,
    setNewPartnerState,
    history,
}: FormNewPartnerThirtyStepProps) => {
    const [load, setLoad] = useState(false);

    const [service, setService] = useState<string>("Limpeza Residencial");
    const [about, setAbout] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [aboutError, setAboutError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);

    const { newPartner } = usePartners();

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        value && setService(value);
    };

    const handleSubmitThirtyStep = async (e: React.MouseEvent) => {
        e.preventDefault();

        const partner = {
            service,
            about,
            password,
            confirmPassword,
        };

        const thirtySchema = yup.object().shape({
            service: yup.string().required("Todos os campos s??o obrigat??rios"),
            about: yup.string().required("Todos os campos s??o obrigat??rios"),
            password: yup
                .string()
                .min(6, "M??nimo de 8 digitos")
                .required("Todos os campos s??o obrigat??rios!"),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref("password")], "Senhas diferentes")
                .required("Todos os campos s??o obrigat??rios!"),
        });

        await thirtySchema
            .validate({ ...partner })
            .then((v) => {
                setLoad(true);
                const { password, about, service } = v;
                setNewPartnerState({
                    ...newPartnerState,
                    password,
                    about,
                    service,
                });
                newPartner(
                    { ...newPartnerState, password, about, service },
                    history,
                    setLoad
                );
            })
            .catch((err) => {
                about === "" && setAboutError(true);
                password === "" && setPasswordError(true);
                (confirmPassword === "" || password !== confirmPassword) &&
                    setPasswordConfirmError(true);
            });
    };

    return (
        <FormStyled load={load}>
            <span>Qual o tipo de servi??o que voc?? realiza?</span>
            <WrapperInputsRadio>
                <InputRadio
                    name="service"
                    value="Limpeza Residencial"
                    selected={service === "Limpeza Residencial"}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSelectChange(e)
                    }
                >
                    Limpeza Residencial
                </InputRadio>
                <InputRadio
                    name="service"
                    value="Passadoria"
                    selected={service === "Passadoria"}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSelectChange(e)
                    }
                >
                    Passadoria
                </InputRadio>
            </WrapperInputsRadio>
            <ContainerTextArea>
                <LabelStyled>Sobre voc??</LabelStyled>
                <TextAreaStyled
                    placeholder="Apresente-se para seus clientes"
                    value={about}
                    error={aboutError}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setAbout(e.target.value)
                    }
                ></TextAreaStyled>
                {aboutError && <ErrorMessage>Campo obrigat??rio</ErrorMessage>}
            </ContainerTextArea>
            <WrapperDoubleInput>
                <Input
                    label="Senha"
                    inputType="password"
                    placeholder="Digite sua senha"
                    errorMessage="Senha inv??lida"
                    error={passwordError}
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                    }}
                />

                <Input
                    label="Confirme sua senha"
                    inputType="password"
                    placeholder="Repita sua senha"
                    errorMessage="Senhas diferentes"
                    error={passwordConfirmError}
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setConfirmPassword(e.target.value);
                        setPasswordConfirmError(false);
                    }}
                />
            </WrapperDoubleInput>
            <Button
                type="button"
                onClickFunc={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleSubmitThirtyStep(e)
                }
            >
                <span>CADASTRAR</span>
                <FaSpinner />
            </Button>
        </FormStyled>
    );
};
