import { useState } from "react";
import { useEffect } from "react";
import CardService from "../../../components/CardService";
import { useServices } from "../../../providers/Services";
import { ServiceData } from "../../../types/ServiceData";
const Services = () => {
  const [error, setError] = useState<boolean>(false);
  const { getServices, services, setServices } = useServices();
  const servico: ServiceData[] = [
    {
      userId: 2,
      date: "01010100",
      price: 200.0,
      serviceDetails: {
        hours: 2,
        class: "passadoria",
      },
      opened: true,
      completed: false,
      partnerId: 0,
    },
    {
      userId: 2,
      date: "01010100",
      price: 200.0,
      serviceDetails: {
        hours: 2,
        class: "passadoria",
      },
      opened: true,
      completed: false,
      partnerId: 0,
    },
    {
      userId: 2,
      date: "01010100",
      price: 200.0,
      serviceDetails: {
        hours: 2,
        class: "passadoria",
      },
      opened: true,
      completed: false,
      partnerId: 0,
    },
  ];
  //   useEffect(() => {
  //     //     getServices(setError);
  //     setServices([
  //       {
  //         userId: 2,
  //         date: "01010100",
  //         price: 200.0,
  //         serviceDetails: {
  //           hours: 2,
  //           class: "passadoria",
  //         },
  //         opened: true,
  //         completed: false,
  //         partnerId: 0,
  //       },
  //     ]);
  //   }, []);
  console.log(servico);
  return (
    <div>
      {servico.map((service) => (
        <CardService service={service} key={service.userId} />
      ))}
    </div>
  );
};
export default Services;
