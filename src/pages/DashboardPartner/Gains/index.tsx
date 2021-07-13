import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LastServices from "../../../components/LastServices";
import { useAuth } from "../../../providers/Auth";
import { useServices } from "../../../providers/Services";
import {
  Container,
  FeaturesColumn,
  FeedColumn,
  WrapperSections,
} from "./style";

const Gains = () => {
  const { getServicesAccepted, servicesAccept } = useServices();
  const { user } = useAuth();

  const [error, setError] = useState(false);

  useEffect(() => {
    getServicesAccepted(setError, user?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <FeaturesColumn>
        <LastServices services={servicesAccept} />
        {error && ""}
        <WrapperSections>
          <div></div>
        </WrapperSections>
      </FeaturesColumn>
      <FeedColumn>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
          ad alias excepturi ipsa quo minus mollitia tempora, quam, explicabo
          praesentium ullam! Laudantium illo explicabo ipsa nesciunt, ad quaerat
          iste?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
          ad alias excepturi ipsa quo minus mollitia tempora, quam, explicabo
          praesentium ullam! Laudantium illo explicabo ipsa nesciunt, ad quaerat
          iste?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
          ad alias excepturi ipsa quo minus mollitia tempora, quam, explicabo
          praesentium ullam! Laudantium illo explicabo ipsa nesciunt, ad quaerat
          iste?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
          ad alias excepturi ipsa quo minus mollitia tempora, quam, explicabo
          praesentium ullam! Laudantium illo explicabo ipsa nesciunt, ad quaerat
          iste?
        </p>
      </FeedColumn>
    </Container>
  );
};

export default Gains;
