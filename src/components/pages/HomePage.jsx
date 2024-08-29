import React, { useState } from "react";
import botAILogo from "../../assets/botAI_logo.png";
import Navigation from "../Navigation";
import Input from "../Input";
import Button from "../Button";
import SuggestionCards from "../SuggestionCards";
import Sidebar from "../Sidebar";
import { useSelector, useDispatch } from "react-redux";
import {
  setQuestion,
  setAnswer,
  addConversation,
  saveConversations,
  clearChat,
} from "../../features/chatSlice";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const HomePage = ({ data }) => {
  const question = useSelector((state) => state.chat.currentQuestion);
  const answer = useSelector((state) => state.chat.currentAnswer);

  const navigate = useNavigate();

  const findAnswer = (text) => {
    const normalizedText = text.trim().toLowerCase();
    const foundAnswer = data.find(
      (item) => item.question.trim().toLowerCase() === normalizedText
    );
    return foundAnswer ? foundAnswer.response : "Please ask another question";
  };

  const handleAsk = () => {
    console.log("question", question);
    if (!question) {
      alert("Please enter a question");
      return;
    }
    const foundAnswer = findAnswer(question);
    dispatch(setAnswer(foundAnswer));
    dispatch(
      addConversation({ question, answer: foundAnswer, timeStamp: Date.now() })
    );
    dispatch(setQuestion(""));
    navigate("/chat");
  };

  const dispatch = useDispatch();
  return (
    <div className="flex min-h-screen">
      <div className="w-52 hidden sm:block">
        <Sidebar />
      </div>
      <div className=" relative px-4 flex flex-col flex-grow homepage-gradient">
        <Navigation />

        <div className="flex flex-col justify-center items-center flex-grow p-4">
          <div className="flex flex-col items-center justify-center flex-grow gap-6 ">
            <p className="text-2xl font-medium">How Can I Help You Today?</p>
            <img src={botAILogo} alt="bot AI logo " className="w-16 h-16" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-auto  w-full ">
            {data.slice(0, 4).map((item, index) => (
              <div key={index} className={index === 3 ? "hidden md:block" : ""}>
                <SuggestionCards text={item.question} data={data} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto w-full p-4">
          <div className="flex gap-3 items-center">
            <Input
              question={question}
              setQuestion={(q) => dispatch(setQuestion(q))}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            />
            <Button text={"Ask"} handleClick={handleAsk} />
            <Button text={"Save"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
