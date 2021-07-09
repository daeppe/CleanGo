import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ServiceData } from "../../types/ServiceData";

import { useServices } from "../../providers/Services";

import {
  Container,
  CalendarWrapper,
  Calendar,
  WeekDay,
  DayTasks,
  Task,
} from "./styles";

const WeekService = () => {
  const [error, setError] = useState(false);
  const [services, setServices] = useState<ServiceData[]>([]);

  const { getServicesAccepted, servicesAccept } = useServices();

  useEffect(() => {
    getServicesAccepted(setError, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let now: number | Date = new Date();
    let month = now.getMonth();

    const servicesFiltered = servicesAccept.filter((service) => {
      let date = new Date(service.date);

      return date.getMonth() === month;
    });

    setServices([...servicesFiltered]);
  }, [servicesAccept]);

  return (
    <Container>
      <h2>Serviços da semana</h2>
      <CalendarWrapper>
        <Calendar>
          <WeekDay>
            <h3>Segunda</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 1;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Terça</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 2;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Quarta</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 3;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Quinta</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 5;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Sexta</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 5;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Sábado</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 6;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Domingo</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 0;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
        </Calendar>
      </CalendarWrapper>
    </Container>
  );
};

export default WeekService;
