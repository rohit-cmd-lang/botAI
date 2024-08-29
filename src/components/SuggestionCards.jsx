import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { clearChat, setQuestion } from "../features/chatSlice";

import { setAnswer, addConversation } from "../features/chatSlice";
import { useNavigate } from "react-router-dom";

const SuggestionCards = ({ text, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findAnswer = (text) => {
    const normalizedText = text.trim().toLowerCase();
    const foundAnswer = data.find(
      (item) => item.question.trim().toLowerCase() === normalizedText
    );
    return foundAnswer ? foundAnswer.response : "I don't know";
  };

  const handleClick = () => {
    dispatch(setQuestion(text));
    dispatch(setAnswer(findAnswer(text)));
    dispatch(
      addConversation({
        question: text,
        answer: findAnswer(text),
        timeStamp: Date.now(),
      })
    );

    navigate("/chat");

    dispatch(setQuestion(""));
  };
  return (
    <div
      className="h-28  flex flex-col shadow-md p-3 suggestion-bg rounded-sm cursor-pointer"
      onClick={handleClick}
    >
      <p className="text-xl font-bold">{text}</p>
      <p className="text-base font-normal text-gray-200">
        Get immediate AI generated response
      </p>
    </div>
  );
};

export default SuggestionCards;
