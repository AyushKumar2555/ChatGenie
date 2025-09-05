// src/screens/NewChat.jsx
import { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import AIButton from "../components/AIButton";

function NewChat({ setScreen }) {
  const [participant, setParticipant] = useState("");
  const [messages, setMessages] = useState([]);

  const icebreakerOptions = [
    "Hi! How's your day going?",
    "Hello! Any exciting plans today?",
    "Hey! Ready to collaborate?",
  ];

  const generateIcebreaker = () => {
    const randomMsg =
      icebreakerOptions[Math.floor(Math.random() * icebreakerOptions.length)];
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: "AI", text: randomMsg },
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const messageText = e.target.message.value.trim();
    if (messageText) {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, sender: "User", text: messageText },
      ]);
      e.target.reset();
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-sm">
        <button
          className="flex items-center text-pink-500 font-sm cursor-pointer hover:text-gray-600 "
          onClick={() => setScreen("home")}
        >
         ← Back
        </button>
        <h1 className="text-xl font-bold text-pink-500">New Chat</h1>
           <button
          className="flex items-center text-pink-500 font-sm cursor-pointer hover:text-gray-600 "
          onClick={() => setScreen("chat")}
        >
         Chat
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        {/* Participant Input */}
        <div className="mb-4">
          <label htmlFor="participant" className="block text-sm font-medium text-gray-700 mb-1">
            Participant Name
          </label>
          <input
            id="participant"
            placeholder="Enter name..."
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:border-pink-500 transition-colors"
          />
        </div>

        {/* AI Buttons */}
        <div className="mb-4" >
          <AIButton 
            label="Generate Icebreaker" 
            onClick={generateIcebreaker}
            disabled={!participant.trim()}
          />
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 p-3 bg-white rounded-lg shadow-inner border border-gray-200">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <ChatMessage key={msg.id} text={msg.text} sender={msg.sender} />
            ))
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
              
                <p>No messages yet. Generate an icebreaker to start the conversation!</p>
              </div>
            </div>
          )}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            name="message"
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-l-lg border border-gray-300 "
            disabled={!participant.trim()}
          />
          <button
            type="submit"
            disabled={!participant.trim()}
            className="bg-pink-500  text-white p-3 rounded-r-lg hover:bg-pink-600 disabled:bg-gray-300  transition-colors"
          >→
          </button>
            
        </form>
      </div>
    </div>
  );
}

export default NewChat;