import { Dispatch, ReactNode, SetStateAction } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import api from "../../services/api";
import { FeedData } from "../../types/UserData";
import jwt_decode from "jwt-decode";
// import { useAuth } from "../Auth";

interface ProviderProps {
  children: ReactNode;
}

interface ProviderData {
  feedPost: (feedData: FeedData) => void;
  userFeed: Array<FeedData>;
  setUserFeed: Dispatch<SetStateAction<Array<FeedData>>>;
}

const FeedContext = createContext<ProviderData>({} as ProviderData);

export const FeedProvider = ({ children }: ProviderProps) => {
  // const { auth } = useAuth();
  // const userId = jwt_decode(auth);
  const [userFeed, setUserFeed] = useState<Array<FeedData>>([]);

  // useEffect(() => {
  //   if (auth) {
  //     api.get(`feed/${userId}`).then((res) => setUserFeed(res.data.token));
  //   }
  // }, [auth]);

  const feedPost = (feedData: FeedData) => {
    api.post(`feed`, feedData);
  };

  return (
    <FeedContext.Provider value={{ feedPost, userFeed, setUserFeed }}>
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => useContext(FeedContext);
