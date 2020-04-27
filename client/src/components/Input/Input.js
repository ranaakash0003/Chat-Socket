import React from "react";
import "./input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </div>
  );
};

export default Input;
