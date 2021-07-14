import React, { useEffect, useState } from "react";
import ReviewsCards from "../../../components/ReviewsCards";
import ReviewsTotal from "../../../components/ReviewsTotal";
import { useAuth } from "../../../providers/Auth";
import { useFeedback } from "../../../providers/Feedbacks";

import {
  Container,
  FeaturesColumn,
  FeedColumn,
  WrapperSections,
} from "./styles";

const Reviews = () => {
  const { user } = useAuth();
  const { getAllFeedback, feedbacks } = useFeedback();

  const [error, setError] = useState(false);
  const [totalFeedback, setTotalFeedback] = useState(0);

  useEffect(() => {
    getAllFeedback(user?.id || 0, setError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (feedbacks.length === 0) {
      setTotalFeedback(5);
    } else {
      let result: number = 0;

      feedbacks.forEach((feedback) => {
        if (feedback.score) {
          result += feedback.score;
        }
      });

      result = result / feedbacks.length;
      setTotalFeedback(result);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [feedbacks]);

  return (
    <Container>
      <FeaturesColumn>
        <ReviewsCards feedbacks={feedbacks} error={error} />
        <WrapperSections>
          <div></div>
          <ReviewsTotal total={totalFeedback.toFixed(2)} />
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

export default Reviews;
