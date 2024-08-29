import Navigation from "../Navigation";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import Sidebar from "../Sidebar";
import ChatBox from "../ChatBox";
import { useSelector, useDispatch } from "react-redux";
import {
  saveConversations,
  clearChat,
  setAnswer,
  addConversation,
  setQuestion,
  addRating,
  addFeedback,
} from "../../features/chatSlice";
import StarRating from "../Rating";
import FeedbackBox from "../FeedbackBox";

import "../styles.css";

const ChatPage = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.chat.currentQuestion);

  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleRatingSubmit = (rating) => {
    dispatch(addRating({ id: Date.now(), rating })); // Save rating in Redux store
    setIsRatingOpen(false);
    setIsFeedbackOpen(true); // Open feedback modal after rating
  };

  const handleFeedbackSubmit = (feedback) => {
    dispatch(addFeedback({ id: Date.now(), feedback })); // Save feedback in Redux store

    dispatch(saveConversations());
    setIsFeedbackOpen(false);
    dispatch(clearChat());
  };

  const handleAsk = () => {
    const foundAnswer = "I don't know";
    dispatch(setAnswer(foundAnswer));
    dispatch(
      addConversation({ question, answer: foundAnswer, timeStamp: Date.now() })
    );
    dispatch(setQuestion(""));
  };
  const handleSave = () => {
    setIsRatingOpen(true);
  };
  const conversations = useSelector((state) => state.chat.conversations);
  return (
    <div className="flex min-h-screen">
      <div className="w-52 hidden sm:block">
        <Sidebar />
      </div>
      <div className="relative px-4 flex-grow flex flex-col homepage-gradient">
        <Navigation />
        <div className="px-4 overflow-y-auto mt-auto max-h-[calc(100vh-80px)] hidden-scrollbar w-full">
          {conversations.map((conversation, index) => (
            <div key={index}>
              <ChatBox text={conversation.question} type="question" />
              <ChatBox text={conversation.answer} type="answer" />
            </div>
          ))}
        </div>

        <div className="flex gap-3 items-center sticky bottom-0 w-full p-4">
          <Input
            question={question}
            setQuestion={(q) => dispatch(setQuestion(q))}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          />
          <Button text={"Ask"} handleClick={handleAsk} keyDown={handleAsk} />

          <Button text={"Save"} handleClick={handleSave} />
          <div className="absolute bottom-20 right-5">
            {" "}
            {isRatingOpen && (
              <StarRating handleRatingSubmit={handleRatingSubmit} />
            )}
            {isFeedbackOpen && (
              <FeedbackBox
                isOpen={isFeedbackOpen}
                onClose={() => setIsFeedbackOpen(false)}
                onSubmit={handleFeedbackSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
