import { createContext, Dispatch, ReactNode, useContext } from "react";

import { FeedBackData } from "../../types/feedbackData";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { notification } from "antd";
import { FaTimes, FaTimesCircle } from "react-icons/fa";

interface FeedbackProviderProps {
  children: ReactNode;
}

interface EditFeedback {
  partnerId?: number;
  score?: number;
  feedback?: string;
}

interface FeedbackProviderData {
  newFeedback: (feedbackData: FeedBackData) => void;
  deleteFeedback: (idFeedback: number) => void;
  editFeedback: (feedbackData: EditFeedback) => void;
  getAllFeedback: (partnerId: number, setError: Dispatch<boolean>) => void;
  feedbacks: FeedBackData[];
}

const FeedbackContext = createContext<FeedbackProviderData>(
  {} as FeedbackProviderData
);
export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const { token } = useAuth();
  const [feedbacks, setFeedbacks] = useState<FeedBackData[]>([]);

  const newFeedback = (feedbackData: FeedBackData) => {
    api
      .post("feedback", feedbackData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        console.log("Feedback feito com sucesso");
      })
      .catch((err) => console.log(err));
  };
  const getAllFeedback = (partnerId: number, setError: Dispatch<boolean>) => {
    if (partnerId === 0) {
      return setError(true);
    }

    api
      .get(`feedback?partnerId=${partnerId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: AxiosResponse) => {
        setFeedbacks(response.data);
      })
      .catch((err: AxiosError) => {
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          description: `Erro ao listar feedbacks. ${err.response?.data}`,
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  const deleteFeedback = (idFeedback: number) => {
    api
      .delete(`feedback/${idFeedback}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        console.log("Feedback deletado com sucesso");
      })
      .catch((err: AxiosError) => {
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          description: `Erro ao deletar feedback. ${err.response?.data}`,
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  const editFeedback = (feedbackData: EditFeedback) => {
    api
      .patch("feedback", feedbackData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        console.log("Feedback editado com sucesso");
      })
      .catch((err: AxiosError) => {
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          description: `Erro ao editar feedback. ${err.response?.data}`,
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };
  return (
    <FeedbackContext.Provider
      value={{
        newFeedback,
        editFeedback,
        deleteFeedback,
        getAllFeedback,
        feedbacks,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);
