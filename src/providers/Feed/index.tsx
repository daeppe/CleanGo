import { createContext, Dispatch, SetStateAction } from "react";
import { ReactNode } from "react";
import api from "../../services/api";
import { FeedData } from "../../types/UserData";
import { History } from "history";
import { useContext } from "react";

interface FeedProviderProps {
  children: ReactNode;
}

interface FeedProviderData {
  jobFeed: (
    feedData: FeedData,
    history: History,
    setError: Dispatch<SetStateAction<boolean>>
  ) => void;
}

const FeedContext = createContext<FeedProviderData>({} as FeedProviderData);

export const FeedProvider = ({ children }: FeedProviderProps) => {
  const jobFeed = (
    feedData: FeedData,
    history: History,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .post("feedback", jobFeed)
      .then(() => history.push("/feed"))
      .catch((_) => setError(true));
  };

  return (
    <FeedContext.Provider value={{ jobFeed }}>{children}</FeedContext.Provider>
  );
};

export const useFeed = () => useContext(FeedContext);
