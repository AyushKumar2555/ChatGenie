// src/screens/ChatList.jsx
import { useState } from "react";
import { dummyChats } from "../data/dummyData";
import ChatCard from "../components/ChatCard"; 

function ChatList({ setScreen, setSelectedChat }) {
  //local state 
  //stores temporary dummy suggestions 
  const [suggestions] = useState([
    { title: "AI in Everyday Life", desc: "Empowering daily tasks..." },
    { title: "Culinary Innovation", desc: "Exploring modern food trends..." },
  ]);

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-pink-50 to-white p-4">
      {/* buttons to navigate between home and new chat screens */}
      <div className="flex justify-between items-center mb-6">
         {/* button to navigate home screen */}
        <button
          onClick={() => setScreen("home")}
          className="flex items-center text-pink-500 font-medium cursor-pointer hover:text-pink-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>

        <h1 className="text-xl font-bold text-pink-500">Chats</h1>
         {/* button to navigate newchat  screen */}
        <button
          className="bg-pink-500 text-white p-2 rounded-full cursor-pointer hover:bg-pink-600 transition-colors"
          onClick={() => setScreen("newChat")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* search Input */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-3 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition-colors"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* suggestions */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-800">Today's Suggestion</h2>
            <button className="text-pink-500 text-sm font-medium hover:text-pink-600 transition-colors">See all</button>
          </div>
          <div className="space-y-3">
            {suggestions.map((sug, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-pink-200 hover:shadow-md transition-all"
              >
                <h3 className="text-pink-500 font-medium mb-1">{sug.title}</h3>
                <p className="text-gray-600 text-sm">{sug.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Chats using ChatCard */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Recent Chats</h2>
          <div className="space-y-3">
            {dummyChats.map((chat) => (
              <ChatCard
                key={chat.id}
                chat={chat}
                onClick={() => {
                  setSelectedChat(chat);
                  setScreen("chat");
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;