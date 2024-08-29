import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Input = ({ question, setQuestion, onKeyDown }) => {
  return (
    <div
      className="
     w-11/12"
    >
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={onKeyDown}
        className="w-full h-10 rounded-md border outline-none px-4"
        placeholder="Type your question here..."
      />
    </div>
  );
};

export default Input;
