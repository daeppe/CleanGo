import React from "react";
import AvailableServices from "../../../components/AvailableServices";
import Button from "../../../components/Button";
import LastGains from "../../../components/LastGains";
import ReviewsTotal from "../../../components/ReviewsTotal";
import WeekService from "../../../components/WeekService";
import {
  Container,
  FeaturesColumn,
  FeedColumn,
  InputFeed,
  WrapperSections,
} from "./styles";

const Main = () => {
  return (
    <Container>
      <FeaturesColumn>
        <AvailableServices />
        <WeekService />
        <WrapperSections>
          <LastGains total={2500} />
          <ReviewsTotal total={4.35} />
        </WrapperSections>
      </FeaturesColumn>
      <FeedColumn>
        <InputFeed placeholder="Começar publicação"></InputFeed>
        <Button>Publicar</Button>
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

export default Main;
