// src/components/ChatCard.jsx
// component to display a single chat item in ChatList 
// chat is an object has chat details fr
// and onClick function handles what happens when card is clicked 
function ChatCard({ chat, onClick }) {

  return (
    <div
      className="bg-white p-3 rounded-lg shadow mb-2 cursor-pointer hover:bg-pink-50 "
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-pink-500 font-medium ">{chat.name}</h3>
        <span className="text-xs text-gray-500">{chat.time}</span>
      </div>
      <p className="text-gray-600 text-sm truncate">{chat.lastMsg}</p>
    </div>
  );
}

export default ChatCard;
