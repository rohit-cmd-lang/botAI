import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearChat } from "../features/chatSlice";
import Sidebar from "./Sidebar";
import "./styles.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex gap-1 items-center w-auto h-12">
      <div className="sm:hidden">
        <svg
          className="size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
          onClick={() => setIsSidebarOpen(true)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <p
        className="text-3xl text-purpleText font-bold cursor-pointer"
        onClick={() => {
          dispatch(clearChat());
          navigate("/");
        }}
      >
        Bot AI
      </p>
      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black z-10"
          onMouseDown={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Navigation;
