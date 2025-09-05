// src/App.jsx
import { useState } from 'react';
import './index.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="min-h-screen bg-purple-50 text-gray-800 ">
      <AppRoutes selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
    </div>
  );
}

export default App;