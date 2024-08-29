import React from "react";
import Sidebar from "../Sidebar";
import Navigation from "../Navigation";
import { useSelector } from "react-redux";
import ConversationHistoryMessageBox from "../ConversationHistoryMessageBox";

const PastConversations = () => {
  const conversationHistory = useSelector(
    (state) => state.chat.savedConversations
  );
  return (
    <div className="flex min-h-screen">
      <div className="w-52 hidden sm:block">
        <Sidebar />
      </div>
      <div className="relative px-4 flex-grow flex flex-col bg-purpleLight">
        <Navigation />
        <div className="mx-auto mt-6">
          <h1 className="text-3xl font-bold text-red-400">
            Conversation History
          </h1>
        </div>

        <div className="mt-4 overflow-y-auto p-4 max-h-[calc(100vh-160px)] hidden-scrollbar">
          {conversationHistory.length > 0 ? (
            conversationHistory.map((conversation, index) => (
              <div
                key={index}
                className="bg-purple shadow-md p-4 mb-4 rounded-md w-full md:w-1/2"
              >
                {/* Render each question and answer pair */}
                {conversation.map((entry, entryIndex) => (
                  // <div key={entryIndex} className="mb-2">
                  //   <p className="font-semibold text-gray-800">
                  //     You: {entry.question}
                  //   </p>
                  //   <p className="text-gray-600">Bot AI: {entry.answer}</p>
                  // </div>
                  <ConversationHistoryMessageBox
                    key={entryIndex}
                    question={entry.question}
                    answer={entry.answer}
                  />
                ))}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-4">
              No conversation history available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastConversations;
