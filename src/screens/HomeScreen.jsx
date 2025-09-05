// src/screens/HomeScreen.jsx
import { dummySuggestions } from "../data/dummyData";
//home screen of chat application 

function HomeScreen({ setScreen }) {
  //setscreens function pased from AppRoutes to change the current screen 
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-pink-50 to-white p-4">
      {/* header with greeting  */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-pink-500 mb-1">
          Hello, Enrico! How can I help?
        </h1>
        <p className="text-gray-500 text-sm">Welcome to your personal assistant</p>
      </div>
      
      {/* summary cards  */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-gray-800">Monthly Summary</h2>
          <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">Updated</span>
        </div>
        <p className="text-gray-600 text-sm mb-1">Last Update: 09/02/2024</p>
        <p className="text-gray-600 text-sm">Summary of this month's work</p>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
            <span className="text-xs text-gray-500">5 active conversations</span>
          </div>
        </div>
      </div>
      
      {/* popular topics list */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-800">Popular Topics</h2>
          <span className="text-pink-500 text-sm">{dummySuggestions.length} topics</span>
        </div>
        <div className="space-y-3">
          {dummySuggestions.map((sug, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-pink-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-start">
                <div className="bg-pink-100 text-pink-600 p-2 rounded-lg mr-3 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-pink-500 font-medium group-hover:text-pink-600 transition-colors">{sug.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{sug.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* buttons to navigate  */}
      <div className="mt-auto pt-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex gap-3">
          {/* this button navigates to chats */}
          <button
            className="flex-1 bg-white text-pink-500 py-3 rounded-xl cursor-pointer border border-pink-200 hover:bg-pink-50 hover:border-pink-300 transition-colors flex items-center justify-center"
            onClick={() => setScreen("chats")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Go to Chats
          </button>
          {/* this button navigates to new chats  */}
          <button
            className="flex-1 bg-pink-500 text-white py-3 rounded-xl cursor-pointer hover:bg-pink-600 transition-colors flex items-center justify-center"
            onClick={() => setScreen("newChat")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start New Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;