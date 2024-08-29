import React from "react";
import botAIlogo from "../assets/botAI_logo.png";
import editIcon from "../assets/editIcon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearChat } from "../features/chatSlice";
import "./styles.css";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(clearChat());
    navigate("/chat");
  };
  return (
    <div
      className={` fixed top-0 left-0 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : ""
      } transition-transform duration-300 w-52 sidebar opacity-100 md:relative md:w-52 md:translate-x-0`}
    >
      <div
        className="flex items-center justify-between w-full h-12 bg-purple p-4 mb-4 cursor-pointer"
        onClick={handleEditClick}
      >
        <img src={botAIlogo} alt="bot AI logo" className="w-6 h-6" />
        <p className="text-xl font-normal">New Chat</p>
        <img src={editIcon} alt="edit" />
      </div>
      <div
        className="bg-purple rounded-xl h-7 w-44 mx-auto my-4"
        onClick={() => navigate("/history")}
      >
        <p className="text-lg text-customGray text-center cursor-pointer">
          Past Conversations
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
