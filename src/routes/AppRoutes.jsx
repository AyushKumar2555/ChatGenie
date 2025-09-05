// src/routes/AppRoutes.jsx
import { useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import ChatList from "../screens/ChatList";
import ChatWindow from "../screens/ChatWindow";
import NewChat from "../screens/NewChat";

//Approutes handles swithcing between diffeent screens 
function AppRoutes() {
  //states to keep track of current active screen and selected chat in active screen
  const [screen, setScreen] = useState("home"); // Current screen
  const [selectedChat, setSelectedChat] = useState(null); // Selected chat 

  return (
    <div className="max-w-md mx-auto h-screen overflow-hidden  p-4 bg-gray-50  shadow-2xl
">
      {/* Home Screen */}
      {/* conditional redering     */}
      {/* setScreen jo parent se pass ho raha hai, wo ek function hai */}
{/* // HomeScreen me props ke through aa gaya, jise call karke screen change karte hain */}
      {screen ==="home" && <HomeScreen setScreen={setScreen} />}

      {/* Chat List Screen */}
      {screen === "chats" && (
        <ChatList setScreen={setScreen} setSelectedChat={setSelectedChat} />
      )}

      {/* Chat Window Screen */}
      {screen === "chat" && selectedChat && (
        <ChatWindow selectedChat={selectedChat} setScreen={setScreen} />
      )}

      {/* New Chat Screen */}
      {screen === "newChat" && <NewChat setScreen={setScreen} />}
    </div>
  );
}

export default AppRoutes;
