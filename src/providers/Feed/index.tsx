import { useState } from "react";
import { useEffect } from "react";
import { ReactNode, useContext } from "react";
import { createContext } from "react";
import api from "../../services/api";
import { FeedData } from "../../types/feedData";
import { useAuth } from "../Auth";

interface ProviderProps {
  children: ReactNode;
}

interface ProviderData {
  feeds: Array<FeedData>;
  feedPost: (feedData: FeedData) => void;
  feedLike: (feedId: number, userId: number) => void;
}

const FeedContext = createContext<ProviderData>({} as ProviderData);

export const FeedProvider = ({ children }: ProviderProps) => {
  const { token } = useAuth();
  const [feeds, setFeeds] = useState<Array<FeedData>>([]);

  const callFeed = () => {
    api
      .get("feed", {
        headers: {
          Authorization: "Bearer" + token,
        },
      })
      .then((res) => setFeeds(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (token) {
      callFeed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const feedPost = (feedData: FeedData) => {
    api.post("feed", feedData, {
      headers: {
        Authorization: "Bearer" + token,
      },
    });
  };

  const feedLike = (feedId: number, userId: number) => {
    api
      .patch(`feed/${feedId}`, {
        headers: {
          Authorization: "Bearer" + token,
        },
      })
      .then(() => callFeed());
  };

  return (
    <FeedContext.Provider value={{ feeds, feedPost, feedLike }}>
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => useContext(FeedContext);
