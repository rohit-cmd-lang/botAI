import React from "react";
import avatar from "../assets/avatar.png";
import botAIlogo from "../assets/botAI_logo.png";

const ConversationHistoryMessageBox = ({
  question,
  answer,
  likeDislike,
  feedback,
  rating,
}) => {
  console.log(feedback);
  console.log(rating);
  return (
    <div className="w-full bg-purple h-max-content flex flex-col p-2 gap-4">
      <div className="flex gap-2 items-start">
        {/* <div className="flex items-center gap-1 flex-grow w-full"> */}
        <img src={avatar} alt="" className="w-6 h-6  shrink-0" />
        <p className="font-bold whitespace-nowrap flex-shrink-0">You :</p>
        {/* </div> */}
        <div className="flex-grow">
          <p className="">{question}</p>
        </div>
      </div>
      <div className="w-full flex gap-2  items-start ml-[-4px]">
        {/* <div className="flex items-center gap-1 flex-grow w-full"> */}
        <img src={botAIlogo} alt="" className="w-8 h-8 shrink-0" />
        <p className="font-bold whitespace-nowrap flex-shrink-0">BotAI :</p>
        {/* </div> */}
        <p className="flex-grow ">{answer}</p>
      </div>
      <div>{likeDislike}</div>
      <div>{feedback}</div>
      <div>{rating}</div>
    </div>
  );
};

export default ConversationHistoryMessageBox;
