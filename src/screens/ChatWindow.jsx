// src/screens/ChatWindow.jsx
import { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import AIButton from "../components/AIButton";
import { dummyMessages } from "../data/dummyData";

function ChatWindow({ selectedChat, setScreen }) {
  const [messages, setMessages] = useState(
    dummyMessages.filter((msg) => msg.chatId === selectedChat.id)
  );

  const handleSmartReply = (reply) => {
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, chatId: selectedChat.id, sender: "User", text: reply },
    ]);
  };

  const handleSummarize = () => {
    setMessages((prev) => [
      ...prev,
      { 
        id: prev.length + 1, 
        chatId: selectedChat.id, 
        sender: "AI", 
        text: "Summary: This conversation focuses on the importance of digital detox, highlighting benefits like reduced stress and improved focus." 
      },
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const messageText = e.target.message.value.trim();
    if (messageText) {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, chatId: selectedChat.id, sender: "User", text: messageText },
      ]);
      e.target.reset();
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-sm">
        <button
          className="flex items-center text-pink-500 font-medium cursor-pointer text-sm hover:text-gray-600 transition-colors"
          onClick={() => setScreen("chats")}
        >
          
          ← Back
        </button>
        <h1 className="text-xl font-bold text-pink-500">{selectedChat.name}</h1>
        <button
        className="flex items-center text-pink-500 font-medium cursor-pointer text-sm hover:text-gray-600 transition-colors"
        onClick={()=>{setScreen("home")}}
        >Home</button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      {/* AI Buttons */}
      <div className="flex space-x-3 p-4 bg-white border-t border-gray-200 overflow-x-auto no-scrollbar">
        <AIButton 
          label="Summarize Thread" 
          onClick={handleSummarize}
          variant="primary"
        />
        <AIButton 
          label="Smart Reply 1" 
          onClick={() => handleSmartReply("That makes sense!")}
          variant="secondary"
        />
        <AIButton 
          label="Smart Reply 2" 
          onClick={() => handleSmartReply("Tell me more about this")}
          variant="secondary"
        />
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <span className="text-gray-500 text-xl mr-2 cursor-pointer hover:text-pink-500">+</span>
          <input
            name="message"
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none text-sm py-1"
          />
          <button type="submit" className="text-gray-500 hover:text-pink-500 ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatWindow;