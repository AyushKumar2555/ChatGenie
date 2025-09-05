// src/components/ChatMessage.jsx
function ChatMessage({ text, sender }) {
  const isAI = sender === "AI";
  
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isAI ? "bg-white border border-gray-200" : "bg-pink-500 text-white"
      }`}>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;