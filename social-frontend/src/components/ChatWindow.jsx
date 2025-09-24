import React, { useState } from "react";
import "../styles/ChatWindow.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: "Shenwei Liu", text: "Ok everyone, I made the reservation!" },
    { sender: "Kari Lee", text: "Yes! Thanks for doing that." },
    { sender: "Thomas Phillips", text: "Let’s meet at my house Saturday morning. How’s 9?" },
    { sender: "Shenwei Liu", text: "Works for me!" },
    { sender: "Thomas Phillips", text: "Does anyone need a sleeping bag?" },
    { sender: "Shenwei Liu", text: "Yes, can I borrow one?" },
    { sender: "Thomas Phillips", text: "Of course!" },
    { sender: "Kari Lee", text: "Me too" },
    { sender: "Thomas Phillips", text: "That's Okk" },

  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>Weekend Trip</span>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg.sender && <div className="sender-name">{msg.sender}</div>}
            <div className={msg.isEmoji ? "emoji" : "message-text"}>{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}

        />
        <button onClick={handleSend} className="send-button">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
