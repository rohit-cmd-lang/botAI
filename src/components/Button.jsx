import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <div
      className="flex items-center justify-center bg-purple text-base font-normal w-16 h-10 rounded-md cursor-pointer"
      onClick={handleClick}
      placeholder="Type your question here..."
    >
      {text}
    </div>
  );
};

export default Button;
